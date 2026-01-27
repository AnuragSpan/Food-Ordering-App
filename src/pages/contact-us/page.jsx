import { CONTACT_FORM_FIELDS, SOCIAL_LINKS } from "../../utils/constants/page";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="p-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Have a question or feedback? We’d love to hear from you.
          </p>

          <form className="space-y-5">
            {CONTACT_FORM_FIELDS.map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="bg-orange-50 flex flex-col ">
          <img
            src="/images/contact-us.jpeg"
            alt="Contact"
            className="h-[40rem] w-full object-contain rounded-xl"
          />

          <div className="flex gap-5 mt-4 ml-5">
            {SOCIAL_LINKS.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                className="p-3 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-2 mb-2 ml-5">
            Follow us on social media
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
