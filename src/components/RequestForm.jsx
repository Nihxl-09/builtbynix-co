import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const projectTypes = [
  "Business Website",
  "Portfolio",
  "Landing Page",
  "E-commerce",
  "Personal Website",
  "Other",
];

const plans = [
  {
    name: "Demo / Project",
    price: "₹500",
  },
  {
    name: "Prototype",
    price: "₹1,000",
  },
  {
    name: "Business",
    price: "₹5,000",
  },
  {
    name: "Custom",
    price: "Negotiable",
  },
];

export default function RequestForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "",
    plan: "",
    description: "",
    reference: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handleProjectSelection = (event) => {
      setForm((current) => ({
        ...current,
        type: event.detail,
      }));
    };

    window.addEventListener(
      "select-project-type",
      handleProjectSelection
    );

    return () => {
      window.removeEventListener(
        "select-project-type",
        handleProjectSelection
      );
    };
  }, []);

  useEffect(() => {
    const handlePlanSelection = (event) => {
      setForm((current) => ({
        ...current,
        plan: event.detail,
      }));
    };

    window.addEventListener("select-plan", handlePlanSelection);

    return () => {
      window.removeEventListener(
        "select-plan",
        handlePlanSelection
      );
    };
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");

    try {
      await emailjs.send(
        "builtbynix_gmail",
        "template_28t1ujp",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          project_type: form.type,
          plan: form.plan,
          description: form.description,
          reference: form.reference || "None provided",
          timeline: form.timeline || "Not specified",
        },
        {
          publicKey: "ZDzulSfJIx4q2eTCZ",
        }
      );

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        type: "",
        plan: "",
        description: "",
        reference: "",
        timeline: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitError(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="request-section" id="request">
        <div className="request-heading">
          <span className="eyebrow">REQUEST RECEIVED</span>

          <h2>
            Your idea is
            <em> on its way.</em>
          </h2>

          <p>
            Your request has been successfully sent to
            BuiltByNix&Co. We'll review the details and get
            back to you.
          </p>
        </div>

        <div className="request-success">
          <div className="request-success-icon">
            <Check size={28} strokeWidth={1.5} />
          </div>

          <div>
            <strong>Request sent successfully.</strong>
            <span>
              We'll review the details and get back to you.
            </span>
          </div>

          <button
            className="request-back"
            type="button"
            onClick={() => setSubmitted(false)}
          >
            SUBMIT ANOTHER REQUEST
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="request-section" id="request">
      <div className="request-heading">
        <div>
          <span className="eyebrow">START A CONVERSATION</span>

          <h2>
            Tell us what
            <br />
            you have <em>in mind.</em>
          </h2>
        </div>

        <p>
          Every project starts with an idea.
          <br />
          Tell us yours and we'll take it from there.
        </p>
      </div>

      <form className="request-form" onSubmit={handleSubmit}>
        <div className="request-block">
          <div className="request-block-number">01</div>

          <div className="request-block-content">
            <h3>About you</h3>
            <p>Let us know who we're building for.</p>

            <div className="form-grid">
              <div className="form-field">
                <label>
                  <span>YOUR NAME *</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your full name"
                  />
                </label>
              </div>

              <div className="form-field">
                <label>
                  <span>EMAIL ADDRESS *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="form-field">
                <label>
                  <span>PHONE / WHATSAPP</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+91 00000 00000"
                  />
                </label>
              </div>

              <div className="form-field">
                <label>
                  <span>BUSINESS / BRAND</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    placeholder="Your brand name"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="request-block">
          <div className="request-block-number">02</div>

          <div className="request-block-content">
            <h3>Your website</h3>
            <p>Give us a starting point.</p>

            <div className="form-grid">
              <div className="form-field">
                <label>
                  <span>PROJECT TYPE *</span>

                  <div className="select-wrap">
                  <select
                    required
                    value={form.type}
                    onChange={(event) =>
                      updateField("type", event.target.value)
                    }
                  >
                    <option value="">
                      Select project type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={18} />
                  </div>
                </label>
              </div>

              <div className="form-field">
                <label>
                  <span>TIMELINE</span>

                  <div className="select-wrap">
                  <select
                    value={form.timeline}
                    onChange={(event) =>
                      updateField("timeline", event.target.value)
                    }
                  >
                    <option value="">
                      When do you need it?
                    </option>
                    <option value="As soon as possible">
                      As soon as possible
                    </option>
                    <option value="Within 1–2 weeks">
                      Within 1–2 weeks
                    </option>
                    <option value="Within a month">
                      Within a month
                    </option>
                    <option value="Flexible">
                      I'm flexible
                    </option>
                  </select>

                  <ChevronDown size={18} />
                  </div>
                </label>
              </div>
            </div>

            <div className="plan-selection">
              <span>SELECT A PLAN *</span>

              <div className="plan-options">
                {plans.map((plan) => (
                  <button
                    type="button"
                    key={plan.name}
                    className={
                      form.plan === plan.name
                        ? "plan-option active"
                        : "plan-option"
                    }
                    onClick={() =>
                      updateField("plan", plan.name)
                    }
                  >
                    <span>{plan.name}</span>
                    <strong>{plan.price}</strong>
                  </button>
                ))}
              </div>

              {!form.plan && (
                <input
                  required
                  tabIndex={-1}
                  aria-hidden="true"
                  className="plan-required"
                  value=""
                  onChange={() => {}}
                />
              )}
            </div>

            <label className="full-field">
              <span>TELL US ABOUT THE PROJECT *</span>
              <textarea
                required
                rows="6"
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                placeholder="What are you looking to build? Tell us about your business, audience, goals, features or anything else that matters..."
              />
            </label>

            <label className="full-field">
              <span>REFERENCE WEBSITE</span>
              <input
                type="url"
                value={form.reference}
                onChange={(event) =>
                  updateField("reference", event.target.value)
                }
                placeholder="https://example.com (optional)"
              />
            </label>
          </div>
        </div>

        {submitError && (
          <div className="request-error">
            {submitError}
          </div>
        )}

        <div className="request-submit">
          <div>
            <span>READY WHEN YOU ARE.</span>
            <p>
              We'll review your request and get back to you.
            </p>
          </div>

          <button
            type="submit"
            className="request-submit-button"
            disabled={submitting}
          >
            {submitting ? (
              "SENDING..."
            ) : (
              <>
                REQUEST YOUR WEBSITE
                <ArrowUpRight size={19} />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}