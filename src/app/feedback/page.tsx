import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Feedback | Just Shop App',
  description: 'Feedback | Just Shop App - portfolio',
}

export default async function FeedbackPage () {
 
  return (
    <>
      <FeedbackForm/>
    </>
  )
}
