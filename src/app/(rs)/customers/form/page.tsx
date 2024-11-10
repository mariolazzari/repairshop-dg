import { getCustomer } from "@/lib/queries/getCustomer";
import { CustomerFormProps } from "./CustomerFormProps";
import { BackButton } from "@/components/BackButton";

async function CustomerFormPage({ searchParams }: CustomerFormProps) {
  try {
    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomer(+customerId);
      if (!customer) {
        // customer not found
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID {customerId} not found
            </h2>
            <BackButton title="Back" />
          </>
        );
      }

      // edit customer
      console.log(customer);
    } else {
      // insert customer
    }
  } catch (ex) {
    throw ex;
  }

  return <div>CustomerFormPage</div>;
}

export default CustomerFormPage;
