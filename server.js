<<<<<<< HEAD
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import WeatherApp from './index';
import template from './template';
import fs from 'fs';
import path from 'path';

/*
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./index');
const template = require('./template');
*/
const server = express();

var PORT = process.env.PORT || 2020;

server.use(express.static(path.join(__dirname, 'static')));
server.use(express.static(path.join(__dirname, 'build')));

/*
server.get('/', (request, response) => {
	const isMobile = false;
	const initialState = { isMobile };
	const appString = renderToString(<WeatherApp />);

	response.send(template({
		body: appString,
		title: 'Hello world from server',
		initialState: JSON.stringify(initialState)
	}));
});
*/
server.listen(PORT);
console.log("Started listening...");
=======
var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');

var PORT = process.env.PORT || 2020;

const server = express();

server.use(express.static(path.join(__dirname, 'static')));

server.get('/', (req, res) => {
	fs.readFile('./index.html', function(error, pageContent){
		if(error){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('<html><head><meta charset="utf-8" /></head><body>Oops something gone wrong !!!</body></html>');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(pageContent);
		}
	});
});

server.listen(PORT);
console.log('Server listening at port '+PORT);
>>>>>>> f22e0b8634ccaaa478370d9771f9e5a5db228115
