import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authstore"
import { PlayCircle, Sheet, File } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Create from "/src/assets/CreateAgent.mp4";
import CreateDocs from "/src/assets/Create.mp4";
import Update from "/src/assets/UpdateAgent.mp4";
import UpdateDocs from "/src/assets/Update.mp4";
import Delete from "/src/assets/DeleteAgent.mp4";
import DeleteDocs from "/src/assets/Delete.mp4";

export const Agenting = () => {

    //Store
    const {
        name
    } = useAuthStore();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1">
                <h1 className="text-4xl font-medium">Agenting Features</h1>
                <p className="text-muted-foreground text-medium">Welcome {name}! This is the ai agenting playground.</p>
                <p className="text-muted-foreground text-medium">We support:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>Ai Powered Googlesheet Agent</li>
                    <li>Ai Powered Googledocs Agent</li>
                </ul>
                <div className="mt-3">
                    <Button onClick={() => navigate("/agent/googlesheet-agent")}>Go To Playground<PlayCircle /></Button>
                </div>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-2xl mt-5 font-medium">Demo Showcase</motion.h1>
            <Tabs defaultValue="googledocs">
                <TabsList>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TabsTrigger value="googledocs" className="gap-2">
                            GoogleDocs Agent<span><File /></span>
                        </TabsTrigger>
                        <TabsTrigger value="googlesheet" className="gap-2">
                            GoogleSheet Agent<span><Sheet /></span>
                        </TabsTrigger>
                    </motion.div>
                </TabsList>
                <TabsContent value="googledocs">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-7">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={CreateDocs} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Creating Google Docs with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Automate your documents and texts. Our AI agent can now generate
                                data, text-contents and formulas directly from your natural language prompts.
                            </p>
                        </div>
                    </motion.div>
                    <hr className="mt-8" />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15 max-md:hidden">
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Updating Google Docs with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Keep your documents polished and precise. Our AI agent instantly updates text, modifies paragraph styles, and synchronizes formatting across your entire document using simple conversational commands. From bolding headers to adjusting margins, transform raw text into a professional report in seconds.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={UpdateDocs} type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15 md:hidden">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={UpdateDocs} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Updating Google Docs with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Keep your documents polished and precise. Our AI agent instantly updates text, modifies paragraph styles, and synchronizes formatting across your entire document using simple conversational commands. From bolding headers to adjusting margins, transform raw text into a professional report in seconds.
                            </p>
                        </div>
                    </motion.div>
                    <hr className="mt-8" />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={DeleteDocs} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Deleting from Google Docs with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Instantly remove outdated sections, redundant paragraphs, or entire chapters with a single command. Our AI agent identifies the exact character range to delete, ensuring your document remains clean, formatted, and free of "ghost" spaces or broken page breaks.
                            </p>
                        </div>
                    </motion.div>
                </TabsContent>
                <TabsContent value="googlesheet">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-7">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={Create} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Creating Google Sheets with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Automate your data entry and organization. Our AI agent can now generate
                                complex spreadsheets and formulas directly from your natural language prompts.
                            </p>
                        </div>
                    </motion.div>
                    <hr className="mt-8" />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15 max-md:hidden">
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Updating Google Sheets with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Keep your data fresh and accurate. Our AI agent can instantly update
                                existing rows, modify cell values, and sync information across your
                                entire spreadsheet using simple conversational commands.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={Update} type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15 md:hidden">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={Update} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Updating Google Sheets with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Keep your data fresh and accurate. Our AI agent can instantly update
                                existing rows, modify cell values, and sync information across your
                                entire spreadsheet using simple conversational commands.
                            </p>
                        </div>
                    </motion.div>
                    <hr className="mt-8" />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-8 rounded-xl mt-15">
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                className="w-full h-auto block"
                            >
                                <source src={Delete} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Deleting from Google Sheets with AI Agent
                            </h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Clean up your workspace in seconds. Simply tell the AI agent which
                                rows or data ranges to remove, allowing you to manage and prune
                                your spreadsheets without manual filtering or searching.
                            </p>
                        </div>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div >
    )
}