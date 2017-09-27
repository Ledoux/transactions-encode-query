'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryString = getQueryString;
exports.getReplacedQueryString = getReplacedQueryString;
exports.encodeSubQuery = encodeSubQuery;
exports.encodeQuery = encodeQuery;

var _constants = require('./constants');

function getQueryString(query) {
  return Object.keys(query).map(function (key) {
    return key + '=' + query[key];
  }).join('&');
}

function getReplacedQueryString(queryString) {
  return queryString.replace(/&/g, '|').replace(/=/g, '=>');
}

function encodeSubQuery(option) {
  var collectionName = option.collectionName,
      query = option.query;

  var queryString = collectionName ? collectionName : '';
  if (query && Object.keys(query).length > 0) {
    var subQueryString = getQueryString(query);
    var replacedQueryString = getReplacedQueryString(subQueryString);
    queryString = collectionName ? '' + queryString + _constants.WHERE + replacedQueryString : replacedQueryString;
  }
  return queryString;
}

function encodeQuery(options) {
  return options.map(function (option, index) {
    return index + '=' + encodeSubQuery(option);
  }).join('&');
}