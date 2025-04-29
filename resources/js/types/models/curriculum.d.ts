export default interface Curriculum {
    id?: number;
    title: string;
    type: 'job',
    description: string;
    institution: string;
    from: Date;
    to: Date;
    [key: string]: unknown;
}