export class Tax {
  /**
   * @private 税率
   * @type {number}
   */
  private readonly rate: number;

  /**
   * コンストラクタ
   * @param {number} rate 税率
   * @constructor
   */
  constructor(rate: number) {
    this.rate = rate;
  }

  /**
   * 税額を取得する
   * @returns {number}
   */
  getTax(amount: number): number {
    return this.rate * amount;
  }

  /**
   * 税込金額を取得する
   * @returns {number}
   */
  getAmountWithTax(amount: number): number {
    return amount + this.getTax(amount);
  }
}
