import { getCustomer } from "@/lib/queries/getCustomer";
import { CustomerFormProps } from "./CustomerFormProps";
import NotFound from "@/components/NotFound";

async function CustomerFormPage({ searchParams }: CustomerFormProps) {
  try {
    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomer(+customerId);
      if (!customer) {
        return <NotFound title={`Customer Id ${customerId} not found`} />;
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
