const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../');

// get all post