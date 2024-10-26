# Form demo

* `FormProvider` encapsulates form data (`formData`) and handles submission logic (`onSubmit`). It stores all form data in a single state object, allowing for centralized management.
* Accepts a form schema that defines field configurations (label, validation functions).
* Field is responsible for rendering individual fields and managing field-specific validation. It integrates both synchronous and asynchronous validation through `useValidation`.
* `useValidation` abstracts sync and async validation logic, returning `error`, `asyncError`, and `isAsyncValidating` state flags to handle UI feedback.
