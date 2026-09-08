import { Schema } from "effect";

/**
 * Represents a person with a name and creation date.
 * @public
 */
export class Person extends Schema.TaggedClass<Person>()("Person", {
	/**
	 * The name of the person
	 */
	name: Schema.String,
	/**
	 * The date the person was created
	 */
	createdAt: Schema.Date,
}) {
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
