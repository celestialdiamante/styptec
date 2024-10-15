import PageHeader from '@/components/Global/PageHeader'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHeader title="Privacy Policy" />

            <section className="py-6 md:py-16">
                <div className="container mx-auto px-4">

                    <h3 className="text-xl font-bold mb-2">Privacy Policy for Styptec.nl</h3>
                    <p className="mb-4">
                        At Styptec, accessible from https://styptec.nl/, protecting your privacy is one of our main priorities. This Privacy Policy outlines the types of information collected and recorded by Styptec and how we use it.
                    </p>
                    <p className="mb-4">
                        If you have additional questions or require more information about our
                        Privacy Policy, do not hesitate to contact us.
                    </p>

                    <h3 className="text-lg font-bold mb-2">Information We Collect</h3>
                    <p>
                        We collect personal information when you voluntarily provide it to us through contact forms, email, or other means. This may include your name, email address, phone number, and any other details necessary for us to provide our services effectively.
                    </p>

                    <h3 className="font-bold mb-2">Log Files</h3>
                    <p>
                        Styptec follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to personally identifiable information and are used for analyzing trends and managing the site.
                    </p>

                    <h3 className="font-bold mb-2">Cookies and Web Beacons</h3>
                    <p>
                        Like most websites, Styptec uses cookies to store information about visitors’ preferences and to optimize the user experience. Cookies may be used to customize website content based on your browser type or other information provided during a visit. You can choose to disable cookies through your browser settings if you prefer.
                    </p>

                    <h3 className="font-bold mb-2">Our Advertising Partners</h3>
                    <p>
                        Some of advertisers on our site may use cookies and web beacons. Our
                        advertising partners are listed below. Each of our advertising partners has
                        their own Privacy Policy for their policies on user data. For easier access,
                        we hyperlinked to their Privacy Policies below.
                    </p>

                    <h3 className="font-bold mb-2">Third-Party Services</h3>
                    <p>
                        Styptec may use third-party services for analytics, marketing, and hosting purposes. These services may collect data such as your IP address and browsing behavior. We encourage you to review the privacy policies of these third parties for further information.
                    </p>

                    <h3 className="font-bold mb-2">Google Analytics</h3>
                    <p>
                        Styptec uses Google Analytics to monitor traffic and user activity. Google Analytics uses cookies to collect data about website traffic. You can learn more about how Google uses your data at Google’s Privacy Policy.
                    </p>

                    <h3 className="font-bold mb-2">Security of Your Information</h3>
                    <p>
                        We implement various security measures to ensure the safety of your personal data. However, please be aware that no method of online transmission or storage is 100% secure. We strive to use commercially acceptable means to protect your information, but we cannot guarantee absolute security.
                    </p>

                    <h3 className="font-bold mb-2">Changes to This Privacy Policy</h3>
                    <p>
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date. We encourage you to review this page periodically to stay informed about how we are protecting your personal information.
                    </p>
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p>
                        If you have any questions or concerns about our Privacy Policy, please contact us at:
                    </p>
                </div>
            </section>
        </>
    )
}
