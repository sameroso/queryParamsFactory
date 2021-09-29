
# Url Search Params Factory

A helper function to deal with url search params on front end


## Installation

Install urlsearchparamsfactory with npm

```bash
  cd my-project
  npm install urlsearchparamsfactory
```
    
## Usage/Examples

```javascript
import urlSearchParams from 'urlsearchparams'
// add a param to url search param

const search = window.location.search // "?param1=value1"
const {addParam} = urlSearchParams(window.location.search)
const urlSearchParamsWithAddedParam = addParam({key:"param2",value:"value2"})
console.log(urlSearchParamsWithAddedParam) // "param1=value1&param2=value2"


// Add a list of params to URl search params

const { addParamList } = urlSearchParamsFactory('?key1=value1')
const urlSearchParamsWithAddedParamList = addParamList([{ key:"key2", value:"value2"},{ key:"key3", value:"value3"}])

console.log(urlSearchParamsWithAddedParamList) // "key1=value1&key2=value2&key3=value3"

// Remove param from URl search params
const { removeParam } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key4=value4')
const urlSearchParamsWithRemovedParam = removeParam("key2")

console.log(urlSearchParamsWithRemovedParam) // "key1=value1&key3=value3&key4=value4"

// Remove a list of params from URl search params
const { removeParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key4=value4')
const urlSearchParamsWithRemovedParamList = removeParamList(["key2", "key3"])

console.log(urlSearchParamsWithRemovedParamList) // "key1=value1&key4=value4"

// Add or replace param => if param exists it replaces the param, if it does not exists it adds param
const { addOrReplaceParam } = urlSearchParamsFactory('?key1=value1&key2=value2')
const urlSearchParamsWithAddedOrReplacedParam = addOrReplaceParam({key:"key2", value:"replacedValue2"})

console.log(urlSearchParamsWithAddedOrReplacedParam) // "key1=value1&key2=replacedValue2"

// Add or replace param list => if param exists it replaces the param, if it does not exists it adds param
const { addOrReplaceParamList } = urlSearchParamsFactory('?key1=value1&key2=value2')
const urlSearchParamWithAddedAndReplacedParam = addOrReplaceParamList([{key:"key2", value:"replacedValue2"},{key:"key3", value:"addedValue3"}])

console.log(urlSearchParamWithAddedAndReplacedParam) // "key1=value1&key2=replacedValue2&key3=addedValue3"

// get specific param on url search params
const { getParam } = urlSearchParamsFactory('?key1=value1&key2=value2')
const param = getParam("key2")

console.log(param) // "value2"

// get list of params on url search params

const { getParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
const params = getParamList(["key2","key3"])

console.log(params) // { key2:"value2", key3:"value3"};

// get all params on url search params
const { getAllParams } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
const params = getAllParams()

console.log(params) // { key1:"value1", key2:"value2", key3:"value3" };

// get url search params

const { getQueryParamUrl } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
const queryParamUrl = getQueryParamUrl()

console.log(queryParamUrl) // "key1=value1&key2=value2&key3=value3";

// Compose => compose can be used to execute more than one function and returns the result url search params modified

const { compose, addOrReplaceParamList, removeParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key5=value5')
const modifiedUrlSearchParams = compose(
     () => addOrReplaceParamList([{key:"key1", value:"replacedValue1"},{key:"key4", value:"value4"}]),
     () => removeParamList(["key2", "key5"])
    )
    console.log(modifiedUrlSearchParams) // "?key1=replacedValue1&key3=value3&key4=value4"

```

  
## Authors

- [@sameroso](https://www.github.com/sameroso)

  