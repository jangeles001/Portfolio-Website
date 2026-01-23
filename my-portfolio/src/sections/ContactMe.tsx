import { useContactMe } from "../hooks/useContactMe";

export function ContactMe(){
    const { formData, formErrors, handleFormChange, handleFormSubmit, isPending } = useContactMe();

    return (
        <section id="contact-section" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Contact Me</h2>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>  
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            maxLength={25}
                            value={formData.from_name || ""}
                            onChange={(e) => handleFormChange("from_name", e.target.value)}
                            className="mt-1 block w-1/4 px-3 py-2 pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">   
                        </input>
                        <span className="text-red-500 text-sm">{formErrors?.from_name}</span>
                    </div>
                    <div>
                        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            maxLength={25}
                            value={formData.from_email || ""}
                            onChange={(e) => handleFormChange("from_email", e.target.value)}
                            className="mt-1 block w-1/4 px-3 py-2 pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        </input>
                        <span className="text-red-500 text-sm">{formErrors?.from_email}</span>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            maxLength={700}
                            rows={4}
                            value={formData.message || ""}
                            onChange={(e) => handleFormChange("message", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        </textarea>
                        <span className="text-red-500 text-sm">{formErrors?.message}</span>
                    </div>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-75">
                        {isPending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    )
}