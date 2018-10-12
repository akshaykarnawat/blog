---
title: Building an Enaml App with Dynamic Containers
date: "2018-10-11"
tags: enaml, python, dynamic containers, desktop app
---

<br>

There are numerous ways to build applications, especially in today's time, as there are plentiful libraries and tools available on the web. To name a few, we can use django, pyramid, and even flask for simpler apps. This article focuses on building desktop apps with Enaml. Enaml is a library to build desktop apps with minimal effort. You might ask why? Why in this day and age would you ever build a desktop app? Hey why not, every project has its requirements and constrainsts.

Here is what we need installed on the computer:
* Miniconda and a conda environment
* latest version of python
* pandas


<br>

Installing enaml
--
Enaml can be installed using `conda` with an easy command.

```bash
> conda install enaml

The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    python.app-2               |           py36_9         1.3 MB
    certifi-2018.8.24          |           py36_1         139 KB
    atom-0.4.1                 |   py36h0a44026_0         107 KB
    openssl-1.0.2p             |       h1de35cc_0         3.4 MB
    ply-3.11                   |           py36_0          79 KB
    qtpy-1.5.1                 |           py36_0          53 KB
    kiwisolver-1.0.1           |   py36h0a44026_0          56 KB
    future-0.16.0              |           py36_2         668 KB
    enaml-0.10.2               |   py36h0a44026_0         961 KB
    ------------------------------------------------------------
                                           Total:         6.7 MB

```
Congrats! You now have enmal installed on your conda environment.

<br>

Folder Structure
--
First create a new folder. And then add initial files using `touch` and `mkdir` commands.

```bash
> mkdir dyn_container_enaml
> cd dyn_container_enaml
> touch main.py
...
```
After completion, the folder structure would looks something like this:

```bash
> tree dyn_container_enaml/
dyn_container_enaml/
├── main.py
└── src/
    ├── app_layout.enaml
    ├── app_model.py
    ├── container_one/
    │   ├── container_one_layout.enaml
    │   └── container_one_model.py
    └── container_two/
        ├── container_two_layout.enaml
        └── container_two_model.py

3 directories, 7 files
```
*Note `tree` is a bash command which can be installed using homebrew package for mac os.
`brew install tree`

<br>

Hello, Enaml!
--
The code in these files is where python will spin off the enaml application. 
So lets get started with some coding!

```python
# main.py

import enaml
import traceback
from src.app_model import AppMain
from enaml.qt.qt_application import QtApplication

# enaml.imports is a gateway to import enaml files as they
# are not part of python. Enaml is a superset of python.
with enaml.imports():
    from src.app_layout import App

try:
    # create a Qt application
    app = QtApplication()

    # define a new view for enaml object
    view = App

    # set the attribute of enaml object to a python object
    App.model = AppMain()

    # initialize the enaml view and call show
    view().show()

    # then start the Qt Application
    app.start()

except:
    print(traceback.format_exc())
```
<br>

```python
# app_layout.enaml

from enaml.widgets.api import Window, Container, Label

# create a new enaml Window object
enamldef App(Window):

    # create an attribute model which gets set in main.py
    # Note: the model can also be instantiated here after
    # import of the python object.
    attr model
    # attr model = AppMain() # import app_model
    
    # container has a label with the message
    Container:
        Label:
            text = "Hello, Enaml!"
```
<br>

```python
# app_model.py

class AppMain(object):
    pass
```

Here is what the output of the app looks like thus far!
<center><img src="../static/hello_enaml-672d77c5a00a2edc9d74e253e487cd78.png" height="200px"></center>


Adding ComboBox in UI
--
Time to add some combo boxes so that we can switch between different containers. Lets start by importing ComboBox widget in enaml and adding it to the container. Next we will change the python object to be that of Atom and then add some other properties which are refrenced in enaml layout. See the code below for more details.

```python
# app_layout.enaml

from enaml.widgets.api import Window, Container, Label, ComboBox

# create a new enaml Window object
enamldef App(Window):

    # create an attribute model which gets set in main.py
    # Note: the model can also be instantiated here after
    # import of the python object.
    attr model
    # attr model = AppMain() # import app_model
    
    Container:
        # container has a label with a title getting set from
        # model property
        Label:
            text << model.title

        # container has a combo box to switch containers for 
        # different modules. Note: the '<<' which implies the
        # model has a property called containers which is
        # getting set.
        ComboBox:
            items << model.containers
```
<br>

```python
# app_model.py

from atom.api import Atom, Value

class AppMain(Atom):
    
    # property has a CAtom object of Value as it is needed
    # to work with enaml superset
    title = Value('Dynamic Container Example')

    # containes are defined here as None
    containers = Value()

    def __init__(self):
        # when the object is initialized, the value for 
        # containers is set
        self.containers = ['Container One', 'Container Two']
```

After these edits, the app looks something like this. Progress!
<center><img src="/static/app_with_combobox-eb114df2de3e6f6dec4d9628a6b67dcf.png"></center>

<br>

Enaml Include other Container Models/Layouts
--
At this point, we want to make it such that when we select an item from the dropdown, we render a different container in the bottom. This is possible due to enaml `include` code api. It lets us remove/add widgets dynamically through python code. Final mile!

Lets start by adding something for each model (One and Two) including the layouts.

```python
# container_one_layout.enaml

from enaml.widgets.api import Window, Container, Label

enamldef ContainerOneLayout(Window):

    # create an attribute model which gets set through code
    attr model
    
    Container:
        Label:
            text << model.title
        Label:
            text = 'This is a random text for container one'
```
<br>

```python
# container_one_model.py

from atom.api import Atom, Value

class ContainerOne(Atom):
    title = Value('Container One')
```
<br>

```python
# container_two_layout.enaml

from enaml.widgets.api import Window, Container, Label

enamldef ContainerTwoLayout(Window):

    # create an attribute model which gets set through code
    attr model
    
    Container:
        Label:
            text << model.title
        Label:
            text = 'Adding some random text for container two'
```
<br>

```python
# container_two_model.py

from atom.api import Atom, Value

class ContainerTwo(Atom):
    title = Value('Container Two')
    
```

Next up, lets add in the locations of the containers and models in the app_model.py and refrence the keys of the model layout as a list to the containers. From here when a user selects a value from the dropdown, we will render a different layout and model, respectively.
