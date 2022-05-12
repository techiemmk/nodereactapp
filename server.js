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