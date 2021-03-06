webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _setRootFontsize = __webpack_require__(185);

	var _setRootFontsize2 = _interopRequireDefault(_setRootFontsize);

	var _Header = __webpack_require__(186);

	var _Header2 = _interopRequireDefault(_Header);

	var _Nav = __webpack_require__(187);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Footer = __webpack_require__(188);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppLink = __webpack_require__(190);

	var _AppLink2 = _interopRequireDefault(_AppLink);

	var _LoadCover = __webpack_require__(192);

	var _LoadCover2 = _interopRequireDefault(_LoadCover);

	var _InitialSearch = __webpack_require__(193);

	var _InitialSearch2 = _interopRequireDefault(_InitialSearch);

	var _ChannelContent = __webpack_require__(200);

	var _ChannelContent2 = _interopRequireDefault(_ChannelContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 存放全局jsonp回调函数
	window.jsonpCallBack = {};
	// 主要内容组件
	// 根据屏幕宽度改变根节点的fontsize值remAdaptation.js

	// 组件


	(0, _setRootFontsize2.default)();

	var Root = _react2.default.createClass({
		displayName: 'Root',

		getInitialState: function getInitialState() {
			return {
				loading: true,
				// 搜索面板是否显示
				initialSearchDisplay: false
			};
		},

		loadendChange: function loadendChange() {
			this.setState({ loading: false });
		},

		// 切换搜索面板是否显示
		toggleInitialSearch: function toggleInitialSearch() {
			var initialSearchDisplay = !this.state.initialSearchDisplay;
			this.setState({ initialSearchDisplay: initialSearchDisplay });
		},

		render: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, { toggleInitialSearch: this.toggleInitialSearch }),
				_react2.default.createElement(_InitialSearch2.default, { initialSearchDisplay: this.state.initialSearchDisplay, toggleInitialSearch: this.toggleInitialSearch }),
				_react2.default.createElement(_LoadCover2.default, { loading: this.state.loading }),
				_react2.default.createElement(_Nav2.default, { pageActive: 1 }),
				_react2.default.createElement(_ChannelContent2.default, { loadendChange: this.loadendChange }),
				_react2.default.createElement(_AppLink2.default, null),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	});

	_reactDom2.default.render(_react2.default.createElement(Root, null), document.querySelector('#app'));

/***/ },

/***/ 185:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	// 根据屏幕宽度改变根节点的fontsize值
	function setRootFontsize() {
		var deviceWidth = document.documentElement.clientWidth;
		console.log(deviceWidth);
		document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
	}

	exports.default = setRootFontsize;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Header
	var React = __webpack_require__(3);

	var Header = React.createClass({
		displayName: 'Header',

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;

			return React.createElement(
				'header',
				{ className: 'header' },
				React.createElement('a', { href: 'index.html', className: 'logo' }),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'a',
						{ href: '###', className: 'search-btn', onClick: toggleInitialSearch },
						React.createElement('i', { className: 'icon-search' })
					),
					React.createElement(
						'a',
						{ href: '###', className: 'history-btn' },
						React.createElement('i', { className: 'icon-history' })
					)
				)
			);
		}
	});

	exports.default = Header;

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Nav
	var React = __webpack_require__(3);
	var Nav = React.createClass({
		displayName: 'Nav',

		render: function render() {
			var pageActive = this.props.pageActive;
			return React.createElement(
				'nav',
				{ className: 'menu' },
				React.createElement(
					'ul',
					{ className: 'menu-list' },
					React.createElement(
						'li',
						{ className: pageActive === 0 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'index.html' },
							'\u9996\u9875'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 1 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'channel.html' },
							'\u9891\u9053'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 2 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'live.html' },
							'\u76F4\u64AD'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 3 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'ranking.html' },
							'\u6392\u884C'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 4 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'user.html' },
							'\u6211\u7684'
						)
					)
				)
			);
		}
	});

	exports.default = Nav;

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toTop = __webpack_require__(189);

	var _toTop2 = _interopRequireDefault(_toTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Footer
	var React = __webpack_require__(3);
	// 返回顶部toTop.js
	var Footer = React.createClass({
		displayName: 'Footer',

		componentDidMount: function componentDidMount() {
			(0, _toTop2.default)('.to-top');
		},
		render: function render() {
			return React.createElement(
				'footer',
				{ className: 'footer' },
				React.createElement(
					'ul',
					{ className: 'foot-menu' },
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-computer', href: '###' },
							React.createElement('i', { className: 'icons icons-computer' }),
							React.createElement(
								'span',
								null,
								'\u7535\u8111\u7248'
							)
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-app', href: '###' },
							React.createElement('i', { className: 'icons icons-app' }),
							React.createElement(
								'span',
								null,
								'\u5BA2\u6237\u7AEF'
							)
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-top', href: '###' },
							React.createElement('i', { className: 'icons icons-top' }),
							React.createElement(
								'span',
								null,
								'\u8FD4\u56DE\u9876\u90E8'
							)
						)
					)
				),
				React.createElement(
					'p',
					null,
					'\u54D4\u54E9\u54D4\u54E9\u5F39\u5E55\u89C6\u9891\u7F51 \u6CAAICP\u590713002172\u53F7-3'
				),
				React.createElement(
					'p',
					null,
					'\u4FE1\u606F\u7F51\u7EDC\u4F20\u64AD\u89C6\u542C\u8282\u76EE\u8BB8\u53EF\u8BC1\uFF1A0910417'
				)
			);
		}
	});

	exports.default = Footer;

/***/ },

/***/ 189:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 返回顶部

	function toTop(clickEleSelector) {
		var clickEle = document.querySelector(clickEleSelector);
		var intervalId = null;
		clickEle.addEventListener('click', function () {
			intervalId = setInterval(function () {
				var rootNode = document.body.scrollTop === 0 ? document.documentElement : document.body;
				rootNode.scrollTop = rootNode.scrollTop - rootNode.scrollTop * 0.1;
				if (rootNode.scrollTop <= 0) {
					clearInterval(intervalId);
				}
			}, 10);
		});
	}

	exports.default = toTop;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _appLinkShow = __webpack_require__(191);

	var _appLinkShow2 = _interopRequireDefault(_appLinkShow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// AppLink底部悬浮窗口
	var React = __webpack_require__(3);
	// 底部悬浮窗口显示隐藏appLinkShow.js

	var AppLink = React.createClass({
		displayName: 'AppLink',

		componentDidMount: function componentDidMount() {
			(0, _appLinkShow2.default)('.app-link', '.app-link .close-btn');
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'app-link' },
				React.createElement('div', { className: 'app-logo' }),
				React.createElement(
					'div',
					{ className: 'app-intro text-overflow' },
					React.createElement(
						'p',
						null,
						'\u4E0Abilibili\u5BA2\u6237\u7AEF'
					),
					React.createElement(
						'p',
						null,
						'\u9AD8\u6E05\u89C6\u9891 \u79BB\u7EBF\u89C2\u770B \u65B0\u756A\u7535\u5F71\u4E00\u89C8\u65E0\u4F59'
					)
				),
				React.createElement(
					'a',
					{ className: 'app-down-btn', href: '###' },
					'\u4E0B\u8F7D'
				),
				React.createElement('div', { className: 'close-btn' })
			);
		}
	});

	exports.default = AppLink;

/***/ },

/***/ 191:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 底部悬浮窗口显示隐藏
	function appLinkShow(appLinkEleSelector, closeEleSelector) {
		var appLink = document.querySelector(appLinkEleSelector);
		var closeBtn = document.querySelector(closeEleSelector);
		var isScroll = false;

		closeBtn.addEventListener('touchstart', function () {
			appLink.style.display = 'none';
			window.removeEventListener('scroll', scrollHandler);
		});

		var scrollHandler = function scrollHandler() {
			if (isScroll === true) {
				return;
			}

			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

			// 滚到底部则隐藏 
			// 页面总高度 - 视口上方因滚动隐藏的区域  = 视口高度  则可以认为滚动到了底部
			// 加上appLink的高度再加100px 意思是 滚动到appLink元素顶部再上100px的地方就隐藏
			if (document.body.scrollHeight - scrollTop <= window.innerHeight + appLink.offsetHeight + 100) {
				appLink.style.transform = 'translateY(100%)';
			} else {
				appLink.style.transform = 'translateY(0)';
			}
			isScroll = true;
			// console.log(body.scrollHeight-body.scrollTop,window.innerHeight+appLink.offsetHeight);

			setTimeout(function () {
				isScroll = false;
			}, 100);
		};

		window.addEventListener('scroll', scrollHandler);
	}

	exports.default = appLinkShow;

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 加载loading页面
	var React = __webpack_require__(3);

	var LoadCover = React.createClass({
		displayName: 'LoadCover',

		render: function render() {
			var loading = this.props.loading;
			return React.createElement(
				'div',
				{ className: 'load-cover' + (loading === false ? ' loaded' : '') },
				React.createElement(
					'div',
					{ className: 'loading-txt' },
					'(\xB4\u30FB\u03C9\u30FB\uFF40)\u6B63\u5728\u52A0\u8F7D...'
				)
			);
		}
	});

	exports.default = LoadCover;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SearchOperation = __webpack_require__(194);

	var _SearchOperation2 = _interopRequireDefault(_SearchOperation);

	var _HotSearch = __webpack_require__(195);

	var _HotSearch2 = _interopRequireDefault(_HotSearch);

	var _HistorySearch = __webpack_require__(196);

	var _HistorySearch2 = _interopRequireDefault(_HistorySearch);

	var _SearchSuggest = __webpack_require__(197);

	var _SearchSuggest2 = _interopRequireDefault(_SearchSuggest);

	var _ajaxRequest = __webpack_require__(198);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _createScriptJsonp = __webpack_require__(199);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // 搜索操作组件
	// 热门搜索组件
	// 历史搜索组件
	// 搜索建议组件

	var InitialSearch = _react2.default.createClass({
		displayName: 'InitialSearch',

		getInitialState: function getInitialState() {
			var historySearch = localStorage.getItem('historySearch');
			historySearch = historySearch === null ? [] : JSON.parse(historySearch);
			return {
				// 表单输入的搜索关键字
				keyword: '',
				// 热很搜索数据 Array
				hotSearch: null,
				// 历史搜索数据 Array
				historySearch: historySearch,
				// 搜索建议数据
				searchSuggest: []
			};
		},

		componentDidMount: function componentDidMount() {
			var _this = this;

			// 请求热门搜索数据 start
			var hotSearchSuccess = function hotSearchSuccess(data) {
				console.log(JSON.parse(data.data), 'hotSearch');
				var hotSearchList = JSON.parse(data.data).list;
				_this.setState({ hotSearch: hotSearchList });
			};
			var hotSearchError = function hotSearchError(error) {
				console.log(error, 'hotSearchError');
			};
			var hotSearchURL = 'http://weizijie.cc:3000/hotSearch';
			(0, _ajaxRequest2.default)(hotSearchURL, 'GET', hotSearchSuccess, hotSearchError);
			// 请求热门搜索数据 end
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.initialSearchDisplay === true) {
				this.refs.initialSearch.classList.add('show');
			} else {
				this.refs.initialSearch.classList.remove('show');
			}
		},

		// 改变keyword数据时执行的操作
		keywordChange: function keywordChange(value) {
			var _this2 = this;

			this.setState({ keyword: value });
			if (value === '') {
				return;
			}
			// 如果搜索关键字不为空则请求搜索建议数据 start
			window.jsonpCallBack.getSearchSuggest = function (data) {
				console.log(data, 'searchSuggest');
				var searchSuggest = [];
				// 分为番剧搜索建议和普通搜索建议，处理一下
				if (data.result.accurate !== undefined) {
					searchSuggest.push.apply(searchSuggest, _toConsumableArray(data.result.accurate.bangumi));
				}
				if (data.result.tag !== undefined) {
					searchSuggest.push.apply(searchSuggest, _toConsumableArray(data.result.tag));
				}
				_this2.setState({ searchSuggest: searchSuggest });
			};
			var searchSuggestURL = 'http://s.search.bilibili.com/main/suggest?jsoncallback=jsonpCallBack.getSearchSuggest&func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term=' + value + '&rnd=0.22961591460117337&_=' + Date.now();
			var searchSuggestScript = (0, _createScriptJsonp2.default)(searchSuggestURL);
			document.body.removeChild(searchSuggestScript);
			// 如果搜索关键字不为空则请求搜索建议数据 end
		},

		// 删除历史搜索
		removeHistorySearch: function removeHistorySearch(index) {
			var _this3 = this;

			return function () {
				var newHistorySearch = _this3.state.historySearch.concat();
				newHistorySearch.splice(index, 1);
				localStorage.setItem('historySearch', JSON.stringify(newHistorySearch));
				_this3.setState({ historySearch: newHistorySearch });
			};
		},

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;

			return _react2.default.createElement(
				'div',
				{ className: 'initial-search', ref: 'initialSearch' },
				_react2.default.createElement(_SearchOperation2.default, { keyword: this.state.keyword, keywordChange: this.keywordChange, toggleInitialSearch: toggleInitialSearch }),
				_react2.default.createElement(
					'div',
					{ className: 'search-message' },
					this.state.keyword === '' ? _react2.default.createElement(
						'div',
						{ className: 'hot-history-content' },
						_react2.default.createElement(_HotSearch2.default, { hotSearchData: this.state.hotSearch }),
						_react2.default.createElement(_HistorySearch2.default, { historySearchData: this.state.historySearch, removeHistorySearch: this.removeHistorySearch })
					) : _react2.default.createElement(_SearchSuggest2.default, { searchSuggestData: this.state.searchSuggest })
				)
			);
		}
	});

	exports.default = InitialSearch;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchOperation = _react2.default.createClass({
		displayName: 'SearchOperation',


		// 表单change事件
		keywordChangeHandler: function keywordChangeHandler(event) {
			// 改变keyword关键字数据
			this.props.keywordChange(event.target.value);
		},

		// 清空keyword关键字数据
		keywordClear: function keywordClear() {
			this.props.keywordChange('');
		},

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;
			// 关键字
			var keyword = this.props.keyword;
			// 是否显示删除按钮
			var deleteIconShow = keyword === '' ? '' : ' show';

			return _react2.default.createElement(
				'div',
				{ className: 'search-operation' },
				_react2.default.createElement(
					'form',
					{ action: 'search.html', method: 'GET', className: 'search-form' },
					_react2.default.createElement('input', { className: 'search-input', name: 'keyword', type: 'text', value: keyword, autoComplete: 'off', placeholder: '\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u3001up\u4E3B\u6216AV\u53F7', onChange: this.keywordChangeHandler, ref: 'searchInput' })
				),
				_react2.default.createElement('i', { className: 'search-input-delete' + deleteIconShow, onClick: this.keywordClear, ref: 'deleteIcon' }),
				_react2.default.createElement(
					'div',
					{ className: 'search-cancel', onClick: toggleInitialSearch },
					'\u53D6\u6D88'
				)
			);
		}
	});

	exports.default = SearchOperation;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HotSearch = _react2.default.createClass({
		displayName: 'HotSearch',

		render: function render() {

			var hotSearchData = this.props.hotSearchData;

			return _react2.default.createElement(
				'div',
				{ className: 'hot-search' },
				_react2.default.createElement(
					'h3',
					{ className: 'search-info-title' },
					'\u70ED\u95E8\u641C\u7D22'
				),
				hotSearchData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'hot-search-list' },
					hotSearchData.map(function (hotSearchItem, index) {

						// 关键字
						var keyword = hotSearchItem.keyword;

						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'a',
								{ href: 'search.html?keyword=' + keyword },
								keyword
							)
						);
					})
				)
			);
		}
	});

	exports.default = HotSearch;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HistorySearch = _react2.default.createClass({
		displayName: 'HistorySearch',

		render: function render() {

			// 历史搜索数据
			var historySearchData = this.props.historySearchData;
			// 是否有历史搜索数据
			var noHistorySearch = historySearchData.length === 0 ? true : false;
			// 删除历史搜索数据方法
			var removeHistorySearch = this.props.removeHistorySearch;

			return _react2.default.createElement(
				'div',
				{ className: 'history-search' },
				_react2.default.createElement(
					'h3',
					{ className: 'search-info-title' },
					'\u5386\u53F2\u641C\u7D22'
				),
				noHistorySearch ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6682\u65E0\u5386\u53F2\u641C\u7D22'
				) : _react2.default.createElement(
					'ul',
					{ className: 'history-search-list' },
					historySearchData.map(function (historySearchItem, index) {
						// historySearchItem 搜索关键字
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'a',
								{ href: 'search.html?keyword=' + historySearchItem },
								historySearchItem
							),
							_react2.default.createElement('i', { className: 'history-delete', onClick: removeHistorySearch(index) })
						);
					})
				)
			);
		}
	});

	exports.default = HistorySearch;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchSuggest = _react2.default.createClass({
		displayName: 'SearchSuggest',

		render: function render() {
			var searchSuggestData = this.props.searchSuggestData;
			return _react2.default.createElement(
				'ul',
				{ className: 'search-suggest' },
				searchSuggestData.map(function (searchSuggestItem, index) {

					// 查询搜索建议结果的html，替换script字符防止xss攻击
					// 组件使用属性dangerouslySetInnerHTML={{__html: suggestResultHTML}} 插入html
					var suggestResultHTML = searchSuggestItem.name.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');
					// 搜索关键字
					var keyword = searchSuggestItem.value;
					// 是否是番剧搜索建议
					var isBangumi = searchSuggestItem.bgmcount === undefined ? false : true;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement('a', { href: 'search.html?keyword=' + keyword, dangerouslySetInnerHTML: { __html: suggestResultHTML } }),
						isBangumi ? _react2.default.createElement(
							'span',
							{ className: 'suggest-bangumi' },
							'\u756A\u5267'
						) : ''
					);
				})
			);
		}
	});

	exports.default = SearchSuggest;

/***/ },

/***/ 198:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// ajax
	/*
	url 请求地址
	method 请求方式 GET POST
	successHandler 请求成功时执行的方法
	errorHandler 请求失败时执行的方法
	*/
	function ajaxRequest(url, method, successHandler, errorHandler) {
		if (window.fetch !== undefined) {
			fetch(url, {
				method: method
			}).then(function (response) {
				// console.log(response);
				// 将json数据转换成对象
				return response.json();
			}).then(function (indexContentData) {
				if (successHandler !== undefined) {
					successHandler(indexContentData);
				}
			}).catch(function (error) {
				if (errorHandler !== undefined) {
					errorHandler(error);
				}
			});
		} else {
			var xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.onreadystatechange = function (event) {
				var target = event.target;
				console.log(event.target);
				if (target.readyState !== 4) {
					return;
				}
				if (target.status === 200 || target.status === 304) {
					var indexContentData = JSON.parse(target.responseText);
					if (successHandler !== undefined) {
						successHandler(indexContentData);
					}
				}
			};
			xhr.send(null);
		}
	}

	exports.default = ajaxRequest;

/***/ },

/***/ 199:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function createScriptJsonp(src) {
		var scriptEle = document.createElement('script');
		scriptEle.src = src;
		try {
			return document.body.appendChild(scriptEle);
		} catch (error) {
			console.log(error, 'createScriptJsonp');
		}
	}

	exports.default = createScriptJsonp;

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ChannelList = __webpack_require__(201);

	var _ChannelList2 = _interopRequireDefault(_ChannelList);

	var _createScriptJsonp = __webpack_require__(199);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// jsonp请求方法

	var ChannelContent = _react2.default.createClass({
		displayName: 'ChannelContent',

		getInitialState: function getInitialState() {

			// 创建频道数据
			function createChannelData(title, iconName, dataName) {
				return {
					// 频道标题
					title: title,
					// 频道图标class
					iconName: iconName,
					// 数据属性名
					dataName: dataName,
					// 更新总数数据
					updateCount: null
				};
			}

			// 频道全部数据
			var channelData = [createChannelData('直播', 'live'), createChannelData('番剧', 'bangumi', 'c13'), createChannelData('国创', 'guoman', 'c167'), createChannelData('动画', 'douga', 'c1'), createChannelData('音乐', 'music', 'c3'), createChannelData('舞蹈', 'dance', 'c129'), createChannelData('游戏', 'game', 'c4'), createChannelData('科技', 'tech', 'c36'), createChannelData('生活', 'life', 'c160'), createChannelData('鬼畜', 'kichiku', 'c119'), createChannelData('娱乐', 'ent', 'c5'), createChannelData('电影', 'movie', 'c23'), createChannelData('电视剧', 'tv', 'c11'), createChannelData('时尚', 'fashion', 'c155'), createChannelData('广告', 'advertise', 'c165')];

			return {
				loading: true,
				// 频道全部数据 Array
				channelData: channelData
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			var channelDataURL = 'http://www.bilibili.com/online.js?_=' + Date.now();
			var getChannelDataScript = (0, _createScriptJsonp2.default)(channelDataURL);

			// 这请求的是js文件，文件内是直接一个变量存放着数据，用load事件确保js文件内容加载完成再使用
			getChannelDataScript.addEventListener('load', function (event) {
				console.log(countInfo, '各频道更新数，Object');
				_this.setState(function () {
					// 跟index页默认版块一样，用事先设置好的数据名来赋值对应属性名的数据
					// countInfo为请求到的存放数据的变量
					_this.state.channelData.forEach(function (channelItem, index) {
						channelItem.updateCount = countInfo[channelItem.dataName];
					});

					return { loading: false };
				});

				_this.props.loadendChange();
				document.body.removeChild(event.currentTarget);
			});
		},
		render: function render() {

			if (this.state.loading) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: 'channel-content' },
				_react2.default.createElement(_ChannelList2.default, { channelData: this.state.channelData })
			);
		}
	}); // 频道列表组件
	exports.default = ChannelContent;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChannelList = _react2.default.createClass({
		displayName: 'ChannelList',

		render: function render() {

			var channelData = this.props.channelData;

			return _react2.default.createElement(
				'ul',
				{ className: 'channel-list' },
				channelData.map(function (channelItem, index) {

					// 频道标题
					var title = channelItem.title;
					// 频道图标class
					var iconName = channelItem.iconName;
					// 是否有更新总数
					var isUpdateCount = channelItem.updateCount !== undefined ? true : false;
					// 更新总数
					var updateCount = channelItem.updateCount > 99 ? '99+' : channelItem.updateCount;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement(
							'a',
							{ href: '###' },
							_react2.default.createElement(
								'i',
								{ className: 'channel-icon channel-icon-' + iconName },
								isUpdateCount ? _react2.default.createElement(
									'span',
									{ className: 'channel-num' },
									updateCount
								) : ''
							),
							_react2.default.createElement(
								'p',
								{ className: 'channel-name' },
								title
							)
						)
					);
				})
			);
		}
	});

	exports.default = ChannelList;

/***/ }

});