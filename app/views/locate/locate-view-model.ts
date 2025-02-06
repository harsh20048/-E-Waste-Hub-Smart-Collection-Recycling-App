import { Observable } from '@nativescript/core';
import { Geolocation } from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';

export class LocateViewModel extends Observable {
    private _userLocation: any = { latitude: 0, longitude: 0 };
    private _mapMarkers: Array<any> = [];
    private _selectedCenter: any = null;
    private _searchQuery: string = '';

    constructor() {
        super();
        this.initializeLocation();
        this.loadCollectionCenters();
    }

    async initializeLocation() {
        try {
            const location = await Geolocation.getCurrentLocation({
                desiredAccuracy: CoreTypes.Accuracy.high,
                maximumAge: 5000,
                timeout: 20000
            });
            
            this._userLocation = {
                latitude: location.latitude,
                longitude: location.longitude
            };
            
            this.notifyPropertyChange('userLocation', this._userLocation);
            this.loadNearbyCollectionCenters();
        } catch (error) {
            console.error('Error getting location:', error);
        }
    }

    async loadCollectionCenters() {
        // Mock data - Replace with API call
        this._mapMarkers = [
            {
                id: 1,
                latitude: this._userLocation.latitude + 0.01,
                longitude: this._userLocation.longitude + 0.01,
                name: 'EcoRecycle Center',
                address: '123 Green Street, Eco City',
                rating: 4.8,
                status: 'Open',
                acceptedItems: ['Electronics', 'Batteries', 'Appliances'],
                operatingHours: '9:00 AM - 6:00 PM'
            },
            {
                id: 2,
                latitude: this._userLocation.latitude - 0.01,
                longitude: this._userLocation.longitude - 0.01,
                name: 'GreenTech Disposal',
                address: '456 Earth Avenue, Eco City',
                rating: 4.5,
                status: 'Open',
                acceptedItems: ['Computers', 'Phones', 'Tablets'],
                operatingHours: '8:00 AM - 5:00 PM'
            }
        ];
        
        this.notifyPropertyChange('mapMarkers', this._mapMarkers);
    }

    onMarkerSelect(args: any) {
        const markerId = args.marker.id;
        this._selectedCenter = this._mapMarkers.find(marker => marker.id === markerId);
        this.notifyPropertyChange('selectedCenter', this._selectedCenter);
    }

    getDirections() {
        // Implement navigation to selected center
        console.log('Getting directions to:', this._selectedCenter.name);
    }

    scheduleDropoff() {
        // Implement drop-off scheduling
        console.log('Scheduling drop-off at:', this._selectedCenter.name);
    }

    onSearch(args: any) {
        // Implement search functionality
        console.log('Searching for:', this._searchQuery);
    }

    onClear() {
        this._searchQuery = '';
        this.notifyPropertyChange('searchQuery', this._searchQuery);
    }

    toggleFilters() {
        // Implement filter functionality
        console.log('Toggling filters');
    }

    get userLocation(): any {
        return this._userLocation;
    }

    get mapMarkers(): Array<any> {
        return this._mapMarkers;
    }

    get selectedCenter(): any {
        return this._selectedCenter;
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
        }
    }
}