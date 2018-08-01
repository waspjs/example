import * as orm from "typeorm";

@orm.Entity()
export default class Person extends orm.BaseEntity {
    constructor(init?: Partial<Person>) {
        super();
        Object.assign(this, init);
    }

    @orm.PrimaryGeneratedColumn()
    id!: string;

    @orm.Column()
    firstName!: string;

    @orm.Column()
    lastName!: string;
}
