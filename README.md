# Au-Business-Lookup

## Summary

This project has been captured within a mono repo consisting of a nodejs server and a webapp created with create-react-app with a typescript template

## ENV Versions

Both server and webapp have been built using node v14


## running instructions

### server

in your terminal withing the root of the server directory install dependencies with either 
`yarn` or `npm install`

then run 
`yarn start` the server will start running a proxy api listening on http://localhost:8000


### webapp

in the root of the webapp directory
install the dependencies using `yarn` or `npm install`

you can the use `yarn start` to have the webpapp running on http://localhost:3000

## warning please ensure you have the server running before running the webapp

## functionality

The user is presented with a search bar as the home view, where they are able to specify a business name.

it will then list out 10 matching business names as cards. The user can then display more details of the business by clicking on the card.

the webapp will be redirected to http://localhost:3000/business/:abn

`:abn` is a url parameter and can fully portable throughout the application.
the user is able to define the abn in the url and it will be able to display the business details page 


# Design choices

Looking at the provided api it was apparent that it was providing a JSONP type service as the JSON data was being wrapped in a callback.


### JSONP

I contemplated going down the route of simply just making jsonp requests to the provided api, this would have been possible but is not something that felt particularly correct.

the application would have essentially been heavily dependent on an api where it would have very limited functionality. 

jsonp was designed to get around the same origin policy, which is heavily specific to browsers.

you are also forced to provide the guid and other various information via the url

which leads me to the alternative approach


### proxy server

I created a simple express server which made proxy requests to the api, and cleaned up the response data to provide json data rather than having to invoke a callback.

by defining a proxy server, the app now has access to better status codes, debugging the possibility a caching layer for increased performance, database persistance, computations etc..

There is ofcourse an argument against the proxy server in the form of more code / additional sources of truth, but there's also the possibility that this can be defined as part of a microservices architecture which would have its own defined database anyways.

# app improvements and other thoughts

## improvements

The app can be immedietly improved by providing a `/search/:businessName` route as part of the search.

the user could see a list of results by defining them in the url itself. This would not be an issue as theres ui in place to handle loading states.

the design would likely need some more attention as i mainly attempted to have mobile viewports in mind, but centre aligning text is not always the best

## other thoughts

The test coverage on this is not great, but the reason for this is because of the nature of this application, alot of it is based on data fetching and rendering behaviours, there's not alot of business logic functionality in the componenents themselves.

This app would actually benefit the most from end to end tests via something like testcafe, purely becuase its need to view data coming in from api sources.


