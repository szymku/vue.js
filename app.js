new Vue({

	el: '#demo',


	data: {
		sortKey: '',

		reverse: false,

		search: '',

		columns: ['name', 'age'],

		people:[
			{name: 'John', age: 23},
			{name: 'Tom', age: 43},
			{name: 'Jo', age: 25},
			{name: 'Brian', age: 63},
			{name: 'Igor', age: 13},
			{name: 'Eve', age: 21},
			{name: 'Zet', age: 52},
			{name: 'Anton', age: 33}
		]
	},

	methods: {
		sortBy: function(sortKey){
			this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
			this.sortKey = sortKey;

		}
	}
});