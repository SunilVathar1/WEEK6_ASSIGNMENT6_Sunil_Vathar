// import { v4 as uuidv4 } from "uuid";
// // import { Client, Environments } from "gocardless-nodejs";
// // import { GOCARDLESS_ACCESS_TOKEN } from "../commons/credentials"; // Assuming you have a credentials file

// // Initialize GoCardless client
// const client = new Client(GOCARDLESS_ACCESS_TOKEN, Environments.Sandbox);

// // Function to create a payment
// export const createPayment = async (userId: number, bookId: number, amount: number) => {
//   try {
//     const payment = await client.payments.create({
//       params: {
//         amount: amount,
//         currency: "USD",
//         metadata: {
//           userId: userId,
//           bookId: bookId,
//         },
//       },
//     });
//     return payment;
//   } catch (error) {
//     console.error("Error creating payment:", error);
//     throw error;
//   }
// };

// // Function to create a customer
// export const createCustomer = async () => {
//   try {
//     const customer = await client.customers.create({
//       email: "user@example.com",
//       given_name: "Frank",
//       family_name: "Osborne",
//       address_line1: "27 Acer Road",
//       address_line2: "Apt 2",
//       city: "London",
//       postal_code: "E8 3GX",
//       country_code: "GB",
//       metadata: {
//         salesforce_id: "ABCD1234",
//       },
//     });
//     return customer;
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     throw error;
//   }
// };

// // Function to create a customer bank account
// export const createCustomerBankAccount = async () => {
//   try {
//     const customerBankAccount = await client.customerBankAccounts.create({
//       account_number: "55779911",
//       branch_code: "200000",
//       account_holder_name: "Frank Osborne",
//       country_code: "GB",
//       links: {
//         customer: "CU123",
//       },
//     });
//     return customerBankAccount;
//   } catch (error) {
//     console.error("Error creating customer bank account:", error);
//     throw error;
//   }
// };

// // Function to create a mandate
// export const createMandate = async () => {
//   try {
//     const mandate = await client.mandates.create({
//       scheme: "bacs",
//       metadata: {
//         contract: "ABCD1234",
//       },
//       links: {
//         customer_bank_account: "BA123",
//         creditor: "CR123",
//       },
//     });
//     return mandate;
//   } catch (error) {
//     console.error("Error creating mandate:", error);
//     throw error;
//   }
// };

// // Function to create a payment using a mandate ID
// export const createPaymentWithMandate = async (userId: number, bookId: number, amount: number, mandateId: string) => {
//   try {
//     const payment = await client.payments.create({
//       amount: amount,
//       currency: "GBP",
//       metadata: {
//         userId: userId,
//         bookId: bookId,
//         order_dispatch_date: "2014-05-22",
//       },
//       links: {
//         mandate: mandateId,
//       },
//     });
//     return payment;
//   } catch (error) {
//     console.error("Error creating payment with mandate:", error);
//     throw error;
//   }
// };
