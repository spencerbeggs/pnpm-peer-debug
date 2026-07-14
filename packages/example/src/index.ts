import { Schema } from "effect";
import type { Effect } from "effect/Effect";
import type { Option } from "effect/Option";
import type { Check, Objects } from "effect/SchemaAST";
/**
 * An animal
 * @public
 */
export class Animal {
	/**
	 * The name of the animal
	 */
	name: string;
	/**
	 * The date the animal was created
	 */
	createdAt: Date;

	constructor(name: string, createdAt: Date) {
		this.name = name;
		this.createdAt = createdAt;
	}
}
/**
 * A cat
 * @public
 */
export class Cat extends Animal {
	meow(): string {
		return `${this.name} says: Meow!`;
	}
}

/**
 * A base class
 * @public
 */
export class Base {
	/**
	 * Some documentation that we want to inherit
	 */
	public member(): void {}
}

/**
 * An interface representing a child
 * @public
 */
export interface IChild {
	/**
	 * Some documentation that we want to inherit
	 */
	value: string;
}

/**
 * A child class that extends the base class and implements the IChild interface
 * @public
 */
export class Child extends Base implements IChild {
	/** {@inheritDoc Base.member} */
	public member(): void {}

	/** {@inheritDoc IChild.value} */
	public value: string = "example";
}

/**
 * A person
 * @public
 */
export class Person extends Schema.Class<Person>("Person")(
	Schema.Struct({
		/**
		 * The name of the person
		 */
		name: Schema.String,
		/**
		 * The date the person was created
		 */
		createdAt: Schema.Date,
	}),
) {
	/**
	 *  Create a custom serializer using the class itself
	 *  @public
	 */
	static readonly serializer = Schema.toCodecJson(this);

	/**
	 * Makes the person speak a message.
	 * @param message - The message to speak
	 * @returns The formatted message
	 */
	speak(message: string): string {
		return `${this.name} says: ${message}`;
	}
}
