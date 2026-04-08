import { Card, CardContent } from "@/components/ui/card"
import { CircleAlert } from "lucide-react"

export const Setup = () => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">Get started</p>
            <h1 className="text-2xl font-semibold">Tutorial How To Setup Your Google Service Account</h1>
            <p>This guide demonstrates how to configure a Google Service Account, enabling your AI agent to securely access the Google Docs API.</p>
            <hr className="mt-4"/>
            <div className="mt-4 space-y-4">
                <h2 className="text-2xl font-semibold ">1. Google Cloud Console Configuration</h2>
                <ul className="space-y-3 max-md:space-y-4 list-disc list-inside">
                    <li >
                        <span>Create a new project in the <a href="https://console.cloud.google.com/" target="_blank" className="underline text-blue-500">Google Cloud Console</a>.</span>
                    </li>
                    <li >
                        <span>Enable the <strong>Google Docs API</strong> and <strong>Google Drive API</strong> from the API Library.</span>
                    </li>
                    <li >
                        <span>Navigate to <strong>IAM & Admin &gt; Service Accounts</strong> and create a new account.</span>
                    </li>
                    <li >
                        <span>Create a <strong>JSON Key</strong> for your service account. download and save the credentials securely.</span>
                    </li>
                    <li >
                        <span>Copy the <strong>Service Account Email</strong> and <strong>Service Account Key.</strong> You'll need to share your Google Docs And Google Sheets with these credentials to grant access.</span>
                    </li>
                </ul>
               
            </div>
            <div className="mt-4 space-y-4">
                <h2 className="text-2xl font-semibold ">2. Setting Up Your Service Account In Finnyt</h2>
                <ul className="space-y-3 list-disc list-inside">
                    <li>
                        <span>Navigate to <strong>AgentTools</strong> in your sidebar.</span>
                    </li>
                    <li>
                        <span>Click on <strong>Go To Playground</strong>.</span>
                    </li>
                    <li>
                        <span>Click on <strong>Settings</strong> in your sidebar.</span>
                    </li>
                    <li>
                        <span>Enter your copied  <strong>Service Account Email</strong> and <strong>Service Account Key</strong> to <strong>Add Service Account</strong>.</span>
                    </li>
                </ul>
            </div>
            <div className="mt-8 ">
                <Card>
                    <CardContent className="flex items-center gap-2">
                        <CircleAlert size={25}/>
                        <p className="text-sm">Enable Sharing In Your Google Docs or Google Sheet Url Wth Your Service Account By Adding and Giving it <strong>Editor Access</strong>.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}