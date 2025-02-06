import { Observable } from '@nativescript/core';

export class AdminViewModel extends Observable {
    private _totalPickups: number = 0;
    private _pendingRequests: number = 0;
    private _activeDrivers: number = 0;
    private _pickupRequests: Array<any> = [];
    private _collectionCenters: Array<any> = [];
    private _drivers: Array<any> = [];

    constructor() {
        super();
        this.loadDashboardData();
    }

    private loadDashboardData() {
        // Mock data - Replace with API calls
        this._totalPickups = 15;
        this._pendingRequests = 8;
        this._activeDrivers = 5;

        this._pickupRequests = [
            {
                address: '123 Main St, City',
                status: 'Pending',
                items: 'Laptop, 2 Smartphones',
                scheduledTime: 'Today, 2:30 PM'
            },
            {
                address: '456 Oak Ave, Town',
                status: 'In Progress',
                items: 'TV, Desktop Computer',
                scheduledTime: 'Today, 3:00 PM'
            },
            {
                address: '789 Pine Rd, Village',
                status: 'Completed',
                items: 'Printer, Scanner',
                scheduledTime: 'Today, 1:15 PM'
            }
        ];

        this._collectionCenters = [
            {
                name: 'Downtown Recycling',
                address: '321 Center St, City',
                capacity: 'Capacity: 75%',
                capacityPercentage: 75,
                status: 'Online'
            },
            {
                name: 'Westside Collection',
                address: '654 West Ave, City',
                capacity: 'Capacity: 90%',
                capacityPercentage: 90,
                status: 'Online'
            },
            {
                name: 'Eastside Depot',
                address: '987 East Rd, City',
                capacity: 'Capacity: 45%',
                capacityPercentage: 45,
                status: 'Offline'
            }
        ];

        this._drivers = [
            {
                avatar: 'https://example.com/avatar1.jpg',
                name: 'John Smith',
                currentLocation: 'Downtown Area',
                status: 'On Pickup'
            },
            {
                avatar: 'https://example.com/avatar2.jpg',
                name: 'Sarah Johnson',
                currentLocation: 'West District',
                status: 'Available'
            },
            {
                avatar: 'https://example.com/avatar3.jpg',
                name: 'Mike Wilson',
                currentLocation: 'South Zone',
                status: 'Available'
            }
        ];

        this.notifyPropertyChange('totalPickups', this._totalPickups);
        this.notifyPropertyChange('pendingRequests', this._pendingRequests);
        this.notifyPropertyChange('activeDrivers', this._activeDrivers);
        this.notifyPropertyChange('pickupRequests', this._pickupRequests);
        this.notifyPropertyChange('collectionCenters', this._collectionCenters);
        this.notifyPropertyChange('drivers', this._drivers);
    }

    refreshData() {
        // Reload dashboard data
        this.loadDashboardData();
    }

    // Getters
    get totalPickups(): number {
        return this._totalPickups;
    }

    get pendingRequests(): number {
        return this._pendingRequests;
    }

    get activeDrivers(): number {
        return this._activeDrivers;
    }

    get pickupRequests(): Array<any> {
        return this._pickupRequests;
    }

    get collectionCenters(): Array<any> {
        return this._collectionCenters;
    }

    get drivers(): Array<any> {
        return this._drivers;
    }
}