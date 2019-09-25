
import * as _ from 'lodash';
import { IEvent } from '../interfaces/ievent.interface';

import * as moment from 'moment';

export class Event implements IEvent {

    constructor(data) {
        _.set(this, 'data', data);
    }

    get id(): string {
        return _.get(this, 'data.id');
    }

    set id(value: string) {
        _.set(this, 'data.id', value);
    }

    get title(): string {
        return _.get(this, 'data.title');
    }

    set title(value: string) {
        _.set(this, 'data.title', value);
    }

    get start(): string {
        return _.get(this, 'data.start');
    }

    set start(value: string) {
        _.set(this, 'data.start', value);
    }

    get end(): string {
        return _.get(this, 'data.end');
    }

    set end(value: string) {
        _.set(this, 'data.end', value);
    }

    get startDate(): Date {
        return _.has(this, 'data.startDate') ? _.get(this, 'data.startDate') : moment(this.start);
    }

    set startDate(value: Date) {
        _.set(this, 'data.startDate', value);
    }

    get endDate(): Date {
        return _.has(this, 'data.endDate') ? _.get(this, 'data.endDate') : moment(this.start);
    }

    set endDate(value: Date) {
        _.set(this, 'data.endDate', value);
    }

    
    get description(): string {
        return _.get(this, 'data.description');
    }

    set description(value: string) {
        _.set(this, 'data.description', value);
    }

    get className(): string {
        return _.get(this, 'data.className');
    }

    set className(value: string) {
        _.set(this, 'data.className', value);
    }

    getData() {
        return _.get(this, 'data');
    }

}