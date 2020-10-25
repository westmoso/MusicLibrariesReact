import React from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';

const fuse = new Fuse(characters, {
    keys: [
      'name',
      'company',
      'species'
    ]
  });
  