import { Schema } from "effect";
/**
 * An animal
 * @public
 */
export class Animal {
	name: string;
	createdAt: Date;

	constructor(name: string, createdAt: Date) {
		this.name = name;
		this.createdAt = createdAt;
	}
}
/**
 * A cat
 * @public
 */ export class Cat extends Animal {
	meow(): string {
		return `${this.name} says: Meow!`;
	}
}

/**
 * A person
 * @public
 */
export class EffectClass extends Schema.Class<EffectClass>("EffectClass")(
	Schema.Struct({
		/**
		 * The name of the person
		 */
		name: Schema.String,
		/**
		 * The date the person was created
		 * */
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
