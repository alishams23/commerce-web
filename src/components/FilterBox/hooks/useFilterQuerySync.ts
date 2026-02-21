import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function useFilterQuerySync(paramKey: string) {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();
  const searchParams = useSearchParams();

  /* -------------------------------------------------------------------------- */
  /*                                  Constants                                 */
  /* -------------------------------------------------------------------------- */

  const defaultValues = searchParams.get(paramKey)?.split(",");

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = formData.getAll(paramKey);

    const params = new URLSearchParams(searchParams);

    if (values.length) {
      params.set(paramKey, values.join(","));
    } else {
      params.delete(paramKey);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return { handleSubmit, defaultValues };
}
