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
# extract.py

from abc import ABCMeta, abstractmethod

class Extract(metaclass=ABCMeta):
    pass
```

```python
# transform.py

from abc import ABCMeta, abstractmethod

class Transform(metaclass=ABCMeta):
    pass
```

```python
# load.py

from abc import ABCMeta, abstractmethod

class Load(metaclass=ABCMeta):
    pass
```

We can now define what each class does as its core. So extractor's job is to extract data. I don't care how, I just know it has to extract data. Transformer's job is to transform the data and the loader's job is to load the data. With this the classes would then look like such.


```python
# extract.py

from abc import ABCMeta, abstractmethod

class Extract(metaclass=ABCMeta):
    
    def __init__(self):
        print('initializiing an instance of extractor class')

    def extract(self):
        return self._extract()

    @abstractmethod # must be defined in all the concrete classes
    def _extract(self):
        return NotImplementedError

```

```python
# transform.py

from abc import ABCMeta, abstractmethod

class Transform(metaclass=ABCMeta):
    
    def __init__(self):
        print('initializiing an instance of transformer class')

    def transform(self):
        return self._transform()

    @abstractmethod # must be defined in all the concrete classes
    def _transform(self):
        return NotImplementedError

```

```python
# load.py

from abc import ABCMeta, abstractmethod

class Load(metaclass=ABCMeta):

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

    extractor   = None
    transformer = None
    loader      = None

    def __init__(self, extractor, transformer, loader):
        print('initializiing an instance of an etl class')
        self.extractor = extractor
        self.transformer = transformer
        self.loader = loader

    def process(self):
        self.extract()
        self.transform()
        self.load()

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

---
<br>

<h4>An Example - Asteroid Mining Operation ETL</h4>

In this example, I am going to show how an automated driller and extractor is going to extract rocks from an asteroid. The transformer is going to sort through the rocks to obtain platinum, and then how a loader is going to load the platinum into a loader which is then transported to Earth for usage. Who knows, not to far in the future, this is how we might obtain resources.


So lets start by creating an concrete example of our ETL Process; in this case the asteroid Mining Gig.


```python

# mining_operation.py

from common.etl import ETL

class MiningOperation(ETL):

    def __init__(self):
        pass

    def _extract(self):
        pass

    def _transform(self):
        pass

    def _load(self):
        pass

    def _transport(self):
        pass

```



