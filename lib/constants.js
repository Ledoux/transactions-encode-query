'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestConfigKeysByConstant = exports.requestConfigConstants = exports.WHERE = exports.SKIP = exports.PARSE = exports.LIMIT = exports.JOINS = exports.IS_ALL_JOINS = exports.IS_ALL_DEEP_JOINS = undefined;

var _lodash = require('lodash.camelcase');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_ALL_DEEP_JOINS = exports.IS_ALL_DEEP_JOINS = '_is_all_deep_joins_';
var IS_ALL_JOINS = exports.IS_ALL_JOINS = '_is_all_joins_';
var JOINS = exports.JOINS = '_joins_';
var LIMIT = exports.LIMIT = '_limit_';
var PARSE = exports.PARSE = '_parse_';
var SKIP = exports.SKIP = '_skip_';
var WHERE = exports.WHERE = '_where_';

var requestConfigConstants = exports.requestConfigConstants = [IS_ALL_DEEP_JOINS, IS_ALL_JOINS, JOINS, LIMIT, SKIP];

var requestConfigKeysByConstant = exports.requestConfigKeysByConstant = {};
requestConfigConstants.forEach(function (requestConfigConstant) {
  requestConfigKeysByConstant[requestConfigConstant] = (0, _lodash2.default)(requestConfigConstant);
});