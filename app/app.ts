import { Application } from '@nativescript/core';
import { Geolocation } from '@nativescript/geolocation';

// Request location permissions on app start
Geolocation.enableLocationRequest();

Application.run({ moduleName: 'app-root' });