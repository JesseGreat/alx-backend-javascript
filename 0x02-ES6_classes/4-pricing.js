// Import the Currency class from the './3-currency' module.
import Currency from './3-currency';

// Create a Pricing class.
export default class Pricing {
  // Constructor to initialize a new Pricing instance with the given amount and currency.
  constructor(amount, currency) {
    this._amount = amount;      // Private field to store the amount.
    this._currency = currency;  // Private field to store the currency object (instance of Currency class).
  }

  // Getter method for the amount.
  get amount() {
    return this._amount;
  }

  // Setter method for the amount.
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter method for the currency.
  get currency() {
    return this._currency;
  }

  // Setter method for the currency.
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price information (amount, currency name, and currency code) as a string.
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price by multiplying the amount with the conversion rate.
  // Parameters: amount (Number) - The original amount to be converted.
  //             conversionRate (Number) - The rate to convert the amount to another currency.
  // Returns: The converted amount (Number).
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Both amount and conversionRate must be numbers');  // Throw an error if the inputs are not numbers.
    }

    return amount * conversionRate;  // Return the converted amount.
  }
}