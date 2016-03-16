# Google Image Search
_a simple way to get image results from a google custom search engine using node_

## Prerequisites
- Google Custom Search Engine - [Create a Google CSE](https://developers.google.com/custom-search/docs/tutorial/creatingcse)
- Google API Key for the CSE

## Usage
This module uses the dotenv package to manage environment variables
In your main app you will also need to use dotenv
Create two new Keys in your .env file and set the values to your CSE ID and your Google CSE API Keys
- CSE_ID=<your-CSE-ID>
- CSE_API_KEY=<your-CSE-API-Key>

## Calling from your app
In your app require the module
Within your code call the module with the following parameters
1. Search Term
2. Callback function (will be called once results are ready)
3. ID number of result you want to offset from
4. Number of results you want (between 1-10 inclusive)

## Example
_index.js of main app_
```
var imageSearch = require('node-google-image-search');

var results = imageSearch('<search-term>', callback, 0, 5);

function callback(results) {
	_do something with results_;
}
```
## Notes
Maximum number of results from Google CSE is 100, this app will return up to 10 at a time.
So, if offset + number of results wanted > 100 then nothing will be returned
