import {Entity, PrimaryKey, Property, ManyToMany} from '@mikro-orm/decorators/legacy'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Client } from '../client/clients.entity.js'
import { Collection } from '@mikro-orm/core'

@Entity()
export class Sport extends BaseEntity{
    @PrimaryKey({ type: 'number' })
    id!: number
    
     @Property({ nullable: false, unique: true })
    name!: string

    @ManyToMany(() => Client, (client) => client.sports, { owner: true })
    clients = new Collection<Client>(this)
}