import { Observable } from '@nativescript/core';
import { Dialogs } from '@nativescript/core';

export class LearnViewModel extends Observable {
    private _totalRecycled: string = '0';
    private _treesEquivalent: string = '0';
    private _co2Reduced: string = '0';
    private _recyclingGuides: Array<any> = [];
    private _dailyTips: Array<any> = [];
    private _newsUpdates: Array<any> = [];

    constructor() {
        super();
        this.loadImpactStats();
        this.loadRecyclingGuides();
        this.loadDailyTips();
        this.loadNewsUpdates();
    }

    private loadImpactStats() {
        // Mock data - Replace with API call
        this._totalRecycled = '1,234';
        this._treesEquivalent = '45';
        this._co2Reduced = '789';

        this.notifyPropertyChange('totalRecycled', this._totalRecycled);
        this.notifyPropertyChange('treesEquivalent', this._treesEquivalent);
        this.notifyPropertyChange('co2Reduced', this._co2Reduced);
    }

    private loadRecyclingGuides() {
        // Mock data - Replace with API call
        this._recyclingGuides = [
            {
                icon: 'font://\uf108',
                title: 'Computer & Laptops',
                description: 'Learn how to properly recycle computers, laptops, and their components.'
            },
            {
                icon: 'font://\uf3cd',
                title: 'Mobile Devices',
                description: 'Guidelines for recycling smartphones, tablets, and accessories.'
            },
            {
                icon: 'font://\uf26c',
                title: 'Home Electronics',
                description: 'Tips for disposing TVs, gaming consoles, and other household electronics.'
            }
        ];

        this.notifyPropertyChange('recyclingGuides', this._recyclingGuides);
    }

    private loadDailyTips() {
        // Mock data - Replace with API call
        this._dailyTips = [
            {
                title: 'Extend Device Life',
                content: 'Keep your devices in good condition by cleaning them regularly and using protective cases.'
            },
            {
                title: 'Data Security',
                content: 'Always perform a factory reset and remove personal data before recycling electronic devices.'
            },
            {
                title: 'Battery Care',
                content: 'Properly dispose of batteries at designated collection points - never throw them in regular trash.'
            }
        ];

        this.notifyPropertyChange('dailyTips', this._dailyTips);
    }

    private loadNewsUpdates() {
        // Mock data - Replace with API call
        this._newsUpdates = [
            {
                image: 'https://example.com/news1.jpg',
                title: 'New Recycling Center Opening',
                date: '2024-03-15',
                summary: 'A state-of-the-art recycling facility is opening in the downtown area next month.'
            },
            {
                image: 'https://example.com/news2.jpg',
                title: 'E-Waste Collection Drive',
                date: '2024-03-10',
                summary: 'Join our community e-waste collection drive this weekend at Central Park.'
            }
        ];

        this.notifyPropertyChange('newsUpdates', this._newsUpdates);
    }

    onGuideSelect(args: any) {
        const guide = this._recyclingGuides[args.index];
        Dialogs.alert({
            title: guide.title,
            message: guide.description,
            okButtonText: 'Close'
        });
    }

    onNewsSelect(args: any) {
        const news = this._newsUpdates[args.index];
        Dialogs.alert({
            title: news.title,
            message: `${news.date}\n\n${news.summary}`,
            okButtonText: 'Close'
        });
    }

    // Getters
    get totalRecycled(): string {
        return this._totalRecycled;
    }

    get treesEquivalent(): string {
        return this._treesEquivalent;
    }

    get co2Reduced(): string {
        return this._co2Reduced;
    }

    get recyclingGuides(): Array<any> {
        return this._recyclingGuides;
    }

    get dailyTips(): Array<any> {
        return this._dailyTips;
    }

    get newsUpdates(): Array<any> {
        return this._newsUpdates;
    }
}