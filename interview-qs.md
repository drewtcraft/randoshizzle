### Interview Questions

#### Technical
1. Write a bracket validator.  

```javascript
	[[ 1, [ 4, 5 ]], 42069 ] //valid

	[ true, [] // invalid
	][, 'haha' // invalid

```

2. Write a bracket validator with multiple types of brackets.  

```javascript
	[{( 'secrets' )}(999)] //valid

	[( 'forking' ]) // invalid
	][{} // invalid

```

3. Consider the following data structure representing a "message" and its response.  

```javascript
	{
		to: 'relay',
		from: 'justsalad37thst',
		subject: 'Issue with order for Mart Flimpson',
		message: 'THE DELIVARY PERSON DID NOT TAKE THE SODA PLEASE HAVE HIM COME BACK',
		uid: '123abc',
		parent: null
	}
	{
		to: 'justsalad37thst',
		from: 'relay',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'We are contacting the rider now.',
		uid: '666zzz',
		parent: '123abc', // points to last message's uid property
	}

```

In the following unordered set of data, write a function to create a "thread" of messages given a single `uid` ('d3w22tt'), in order from first to last.

```javascript
[
	{
		to: 'justsalad37thst',
		from: 'relay',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'We are contacting the rider now.',
		uid: '666zzz',
		parent: '123abc',
	},
	{
		to: 'relay',
		from: 'blimpdawgz420thave',
		subject: 'Hey',
		message: 'just wanted to say thanks for the memories.',
		uid: 'fargooze339y',
		parent: null,
	},
	{
		to: 'relay',
		from: 'justsalad37thst',
		subject: 'Issue with order for Mart Flimpson',
		message: 'THE DELIVARY PERSON DID NOT TAKE THE SODA PLEASE HAVE HIM COME BACK',
		uid: '123abc',
		parent: null,
	},
	{
		to: 'relay',
		from: 'justsalad37thst',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'CUSTOMER CALL AND COMPLAIN WHATS HAPPENING',
		uid: 'd3w22tt',
		parent: '666zzz',
	},
	{
		to: 'blimpdawgz420thave',
		from: 'relay',
		subject: 'RE:Hey',
		message: 'Great thanks.',
		uid: 'io345aaq1',
		parent: 'fargooze339y',
	},
	{
		to: 'justsalad37thst',
		from: 'relay',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'Please drag the order back to ready and we will send another rider.',
		uid: 'yi8787nm',
		parent: 'd3w22tt',
	},
	{
		to: 'relay',
		from: 'morphchiken',
		subject: 'Issue with order for Patrick Clownstar',
		message: 'hi the customer siad he received the wrong food',
		uid: '456pupstick',
		parent: null,
	},
	{
		to: 'morphchiken',
		from: 'relay',
		subject: 'RE:Issue with order for Patrick Clownstar',
		message: 'We are contacting the rider.',
		uid: 'lp090p9p',
		parent: '456pupstick',
	},
]
```

expected output:
```javascript
	{
		to: 'relay',
		from: 'justsalad37thst',
		subject: 'Issue with order for Mart Flimpson',
		message: 'THE DELIVARY PERSON DID NOT TAKE THE SODA PLEASE HAVE HIM COME BACK',
		uid: '123abc',
		parent: null,
	},
	{
		to: 'justsalad37thst',
		from: 'relay',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'We are contacting the rider now.',
		uid: '666zzz',
		parent: '123abc',
	},
	{
		to: 'relay',
		from: 'justsalad37thst',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'CUSTOMER CALL AND COMPLAIN WHATS HAPPENING',
		uid: 'd3w22tt',
		parent: '666zzz',
	},
	{
		to: 'justsalad37thst',
		from: 'relay',
		subject: 'RE:Issue with order for Mart Flimpson',
		message: 'Please drag the order back to ready and we will send another rider.',
		uid: 'yi8787nm',
		parent: 'd3w22tt',
	},
```
4. Accessing the above data set is asynchronous -- modify the above function to reflect this new restriction.  

#### Experience

1. Talk about a time you solved a problem in an unconventional way.  

2. What was the last thing you learned outside of work?  

3. Describe the architecture of your last company's product.  

#### Behavioral

1. What interests you about Relay vs. another company, if anything?  

2. Say you receive this job title (Data Engineer) -- what job title do you hope to hold AFTER your next job title?  

3. You have two bosses -- one asks you to do a project, the other tells you not to do it. Before you have a chance to straighten it out with them, they flee the office and are gone for a week. How do you proceed?
