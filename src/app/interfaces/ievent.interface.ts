export interface IEvent {
    id?: string;
    title: string;
    start: string;
    end?: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    className: string;
}