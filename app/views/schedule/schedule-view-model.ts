import { Observable } from '@nativescript/core';
import { Dialogs } from '@nativescript/core';

export class ScheduleViewModel extends Observable {
    private _address: string = '';
    private _newItem: string = '';
    private _selectedItems: Array<any> = [];
    private _preferredDate: Date = new Date();
    private _timeSlots: Array<string> = [
        '9:00 AM - 11:00 AM',
        '11:00 AM - 1:00 PM',
        '2:00 PM - 4:00 PM',
        '4:00 PM - 6:00 PM'
    ];
    private _selectedTimeSlotIndex: number = 0;
    private _notes: string = '';

    constructor() {
        super();
    }

    addItem() {
        if (this._newItem.trim()) {
            this._selectedItems.push({
                id: Date.now(),
                name: this._newItem.trim()
            });
            this._newItem = '';
            this.notifyPropertyChange('selectedItems', this._selectedItems);
            this.notifyPropertyChange('newItem', this._newItem);
        }
    }

    onItemRemove(args: any) {
        const itemIndex = this._selectedItems.findIndex(
            item => item.id === args.object.bindingContext.id
        );
        if (itemIndex > -1) {
            this._selectedItems.splice(itemIndex, 1);
            this.notifyPropertyChange('selectedItems', this._selectedItems);
        }
    }

    async submitRequest() {
        if (!this.validateForm()) {
            return;
        }

        const request = {
            address: this._address,
            items: this._selectedItems,
            date: this._preferredDate,
            timeSlot: this._timeSlots[this._selectedTimeSlotIndex],
            notes: this._notes
        };

        try {
            // Mock API call - Replace with actual API integration
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            await Dialogs.alert({
                title: 'Success',
                message: 'Your pickup has been scheduled successfully!',
                okButtonText: 'OK'
            });

            this.resetForm();
        } catch (error) {
            console.error('Error submitting request:', error);
            await Dialogs.alert({
                title: 'Error',
                message: 'Failed to schedule pickup. Please try again.',
                okButtonText: 'OK'
            });
        }
    }

    private validateForm(): boolean {
        if (!this._address.trim()) {
            Dialogs.alert({
                title: 'Error',
                message: 'Please enter a pickup address',
                okButtonText: 'OK'
            });
            return false;
        }

        if (this._selectedItems.length === 0) {
            Dialogs.alert({
                title: 'Error',
                message: 'Please add at least one item for pickup',
                okButtonText: 'OK'
            });
            return false;
        }

        return true;
    }

    private resetForm() {
        this._address = '';
        this._selectedItems = [];
        this._preferredDate = new Date();
        this._selectedTimeSlotIndex = 0;
        this._notes = '';

        this.notifyPropertyChange('address', this._address);
        this.notifyPropertyChange('selectedItems', this._selectedItems);
        this.notifyPropertyChange('preferredDate', this._preferredDate);
        this.notifyPropertyChange('selectedTimeSlotIndex', this._selectedTimeSlotIndex);
        this.notifyPropertyChange('notes', this._notes);
    }

    // Getters and Setters
    get address(): string {
        return this._address;
    }

    set address(value: string) {
        if (this._address !== value) {
            this._address = value;
            this.notifyPropertyChange('address', value);
        }
    }

    get newItem(): string {
        return this._newItem;
    }

    set newItem(value: string) {
        if (this._newItem !== value) {
            this._newItem = value;
            this.notifyPropertyChange('newItem', value);
        }
    }

    get selectedItems(): Array<any> {
        return this._selectedItems;
    }

    get preferredDate(): Date {
        return this._preferredDate;
    }

    set preferredDate(value: Date) {
        if (this._preferredDate !== value) {
            this._preferredDate = value;
            this.notifyPropertyChange('preferredDate', value);
        }
    }

    get timeSlots(): Array<string> {
        return this._timeSlots;
    }

    get selectedTimeSlotIndex(): number {
        return this._selectedTimeSlotIndex;
    }

    set selectedTimeSlotIndex(value: number) {
        if (this._selectedTimeSlotIndex !== value) {
            this._selectedTimeSlotIndex = value;
            this.notifyPropertyChange('selectedTimeSlotIndex', value);
        }
    }

    get notes(): string {
        return this._notes;
    }

    set notes(value: string) {
        if (this._notes !== value) {
            this._notes = value;
            this.notifyPropertyChange('notes', value);
        }
    }
}