---
title: An approach to writing ETL processes in python using Abstract Factory
date: "2018-11-05"
tags: python, design pattern, etl, abstract factory
---

<br>

ETL which stands for <strong>Extract - Transform - Load</strong> is an important task in any machine learning or data mining problem. It's the first step to make sure that the data required to perform the computation is gather and loaded properly into a database where it can be retrieved later for further analysis. And database is an arbitraty storage, it can also be stored in a file system as files or python pickles, etc. 

In the Extraction process, we begin by looking at sources where we can extract the data from. For instance, we can extract data from a database, file system, a server, an IOT device, whatever. The transformation process looks at transforming that data into a meaning full structured dataset; where multiple sources can be combined into one. This is the place where data can also be manipulated before load. And the last step is where the transformed data is loaded into a system from where you or others can access the structured data for convenience. 

These steps also keep your data gathering process away from any other analyis you wish to do with your data you collected. So lets begin!

In order to understand how we can use Abstract Factory to create a generic ETL framework, we must first understand what abstraction is and what abstract factories are. 

An abstraction is a very generic way to saying something. For instance, a forest is an abstraction. Or a planet. Where as an Amazon forest is an example of a forest and Mars is an example of a planet. And there are arbitrary number of example abstractions. What about a forest on Marrs? Or even better, a forest on a planet? These are very generic in the sense that they don't really tell what kind of a forest and what kind of a planet.

> *"An <strong>abstraction</strong> is the act of representing essential features without including the background details or explanations."*

For instance, National Park is an abstraction where as Yosemite, and Big Bend are like examples (concrete examples) of that abstraction. Something better would be a Park as an abstrction and then you have a Dog Park, Central Park, Yosemite, etc. which are all examples of a park.

From this definition we know that Extraction is a very generic term that can be represented with an abstraction. And so is Transformation, and Load. We can create object classes from them as such.

```python
# extract.py

class Extract(object):
    pass
```

```python
# transform.py

class Transform(object):
    pass
```

```python
# load.py

class Load(object):
    pass
```

In order for them to be abstraction, we have to `import abc`. `abc` is the library for creating abstract classes in python. [Abstract Base Classes](https://docs.python.org/3.7/library/abc.html)


```python
from abc import ABCMeta, abstractmethod
```

Now the classes look like such:

```python
# extractor.py

from abc import ABCMeta, abstractmethod

class Extractor(metaclass=ABCMeta):
    pass
```

```python
# transformer.py

from abc import ABCMeta, abstractmethod

class Transformer(metaclass=ABCMeta):
    pass
```

```python
# loader.py

from abc import ABCMeta, abstractmethod

class Loader(metaclass=ABCMeta):
    pass
```

We can now define what each class does as its core. So extractor's job is to extract data. I don't care how, I just know it has to extract data. Transformer's job is to transform the data and the loader's job is to load the data. With this the classes would then look like such.


```python
# extractor.py

from abc import ABCMeta, abstractmethod

class Extractor(metaclass=ABCMeta):
    
    def __init__(self):
        print('initializiing an instance of extractor class')

    def extract(self):
        return self._extract()

    @abstractmethod # must be defined in all the concrete classes
    def _extract(self):
        return NotImplementedError

```

```python
# transformer.py

from abc import ABCMeta, abstractmethod

class Transformer(metaclass=ABCMeta):
    
    def __init__(self):
        print('initializiing an instance of transformer class')

    def transform(self):
        return self._transform()

    @abstractmethod # must be defined in all the concrete classes
    def _transform(self):
        return NotImplementedError

```

```python
# loader.py

from abc import ABCMeta, abstractmethod

class Loader(metaclass=ABCMeta):

    def __init__(self):
        print('initializiing an instance of loader class')

    def load(self):
        return self._load()

    @abstractmethod # must be defined in all the concrete classes
    def _load(self):
        return NotImplementedError

```

Now in order to pull this all together to create an Abstract Factory we must define yet another class which pulls all these classes together. 

```python
# etl.py

from abc import ABCMeta, abstractmethod

class ETL(metaclass=ABCMeta):

    extractor       = None
    transformer     = None
    loader          = None

    def __init__(self):
        print('initializiing an instance of an etl class')

    def extract(self):
        return self._extract()

    def transform(self):
        return self._transform()

    def load(self):
        return self._load()

    @abstractmethod # must be defined in all the concrete classes
    def _extract(self):
        return NotImplementedError

    @abstractmethod # must be defined in all the concrete classes
    def _transform(self):
        return NotImplementedError

    @abstractmethod # must be defined in all the concrete classes
    def _load(self):
        return NotImplementedError

```

In this case, everytime we want to defined a ETL process we must have a concrete example of an ETL process where all concrete extractor, concrete transformer, and concrete loader are defined and initialized.

--
<br>

<h4>An Example - Asteroid Mining Operation ETL</h4>

In this example, I am going to show how an automated driller and extractor is going to extract rocks from an asteroid. The transformer is going to sort through the rocks to obtain platinum, and then how a loader is going to load the platinum into a loader which is then transported to Earth for usage. Who knows, not to far in the future, this is how we might obtain resources.

Athough this example does not deal with the 'data', it does deal with 'rock or ore' which can be treated like data. So lets start by creating an concrete example of our ETL Process; in this case the asteroid mining gig.


```python
# mining_gig.py

from asteroid_mining_operation.rock_transformer import RockTransformer
from asteroid_mining_operation.rock_extractor import RockExtractor
from asteroid_mining_operation.rock_loader import RockLoader
from common.etl import ETL

class MiningGig(ETL):

    def __init__(self):
        super(MiningGig, self).__init__()

        self.extractor = RockExtractor()
        self.transformer = RockTransformer()
        self.loader = RockLoader()

    def _extract(self):
        return self.extractor.extract()

    def _transform(self):
        return self.transformer.transform()

    def _load(self):
        return self.loader.load()

    def _transport(self, location):
        return 'Transporting the module with ore to {0}'.format(location)

```

This class implements the ETL abstract base class to extract transform and load. It also inclues a transport function which is an added functionality just for this sort of gigs. The following code will go more into details for each of the extrctor, transformer, and loader classes. Note that these classes can be changed at a later point in time since they are just concrete examples of the underlying abstraction. 

```python
# rock_extractor.py

from common.extractor import Extractor

class RockExtractor(Extractor):

    def __init__(self):
        super(RockExtractor, self).__init__()

    def _extract(self):
        rocks = self._drill() # other specific class functions can also be called!
        return 'Rock(s) {0} were drilled'.format(rocks)

    def _drill(self):
        ''' drill for rocks! (can also be a python generator) '''
        return [x for x in range(0,100)]

```

```python
# rock_transformer.py

from common.transformer import Transformer

class RockTransformer(Transformer):
    
    def __init__(self):
        super(RockTransformer, self).__init__()

    def _transform(self):
        return 'transforming mined rocks and finding the ones that have ores'
        
```

```python
# rock_loader.py

from common.loader import Loader

class RockLoader(Loader):

    def __init__(self):
        super(RockLoader, self).__init__()

    def _load(self):
        return 'loading ores into a transport'

```

```python
# main.py

from asteroid_mining_operation.mining_gig import MiningGig

gig = MiningGig()
print(gig.extract())
print(gig.transform())
print(gig.load())
print(gig._transport(location='EARTH'))

```

```Makefile
run: 
	python -m main
```

Here is the final directory structure of the example above

```bash
> tree .
.
├── Makefile
├── asteroid_mining_operation
│   ├── mining_gig.py
│   ├── rock_extractor.py
│   ├── rock_loader.py
│   └── rock_transformer.py
├── common
│   ├── etl.py
│   ├── extractor.py
│   ├── loader.py
│   └── transformer.py
└── main.py

2 directories, 10 files

```

