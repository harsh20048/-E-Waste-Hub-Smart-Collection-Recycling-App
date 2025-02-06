import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _totalRecycled: number = 0;
    private _co2Saved: number = 0;
    private _points: number = 0;
    private _upcomingPickups: Array<any> = [];
    private _nearbyCenters: Array<any> = [];

    constructor() {
        super();
        
        // Initialize with mock data
        this._totalRecycled = 125;
        this._co2Saved = 250;
        this._points = 1500;
        
        this._upcomingPickups = [
            { date: '2024-03-20', items: 'Laptop, Phone', status: 'Scheduled' },
            { date: '2024-03-25', items: 'TV, Printer', status: 'Pending' }
        ];
        
        this._nearbyCenters = [
            { name: 'EcoRecycle Center', distance: '2.5 km', rating: '4.8★' },
            { name: 'GreenTech Disposal', distance: '3.7 km', rating: '4.5★' }
        ];

        this.notifyPropertyChange('totalRecycled', this._totalRecycled);
        this.notifyPropertyChange('co2Saved', this._co2Saved);
        this.notifyPropertyChange('points', this._points);
        this.notifyPropertyChange('upcomingPickups', this._upcomingPickups);
        this.notifyPropertyChange('nearbyCenters', this._nearbyCenters);
    }

    get totalRecycled(): number {
        return this._totalRecycled;
    }

    get co2Saved(): number {
        return this._co2Saved;
    }

    get points(): number {
        return this._points;
    }

    get upcomingPickups(): Array<any> {
        return this._upcomingPickups;
    }

    get nearbyCenters(): Array<any> {
        return this._nearbyCenters;
    }

    schedulePickup() {
        // Navigate to schedule page
    }

    findCenters() {
        // Navigate to centers map
    }

    viewGuide() {
        // Navigate to educational content
    }

    viewRewards() {
        // Navigate to rewards page
    }
}