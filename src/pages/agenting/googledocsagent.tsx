
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthStore } from "@/store/authstore";
import { useServiceStore } from "@/store/servicestore";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Bot, Edit3, File, Link, Link2, MessageCircle, Plus, Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAiStore } from "@/store/aistore";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const GoogleDocsagent = () => {

    //Store
    const {
        servicefetch,
        servicedata,
        loadingfetch,
        fetchurl2,
        loadingurl2,
        addurl2,
        url2,
    } = useServiceStore();
    const {
        id
    } = useAuthStore();
    const {
        Aiagentdocscreate,
        Aiagentdocsupdate,
        Aiagentdocsdelete,
        loadingagentdocs
    } = useAiStore();

    //States
    const [urlcreate, seturlcreate] = useState<string>("");
    const [refresh, setrefresh] = useState<boolean>(false);
    const [openurl, setopenurl] = useState<boolean>(false);
    const [opencreate, setopencreate] = useState<boolean>(false);
    const [openupdate, setopenupdate] = useState<boolean>(false);
    const [opendelete, setopendelete] = useState<boolean>(false);
    const [selecturl, setselectedurl] = useState<string>("");
    const [prompt, setprompt] = useState<string>("");
    const [aireply, setaireply] = useState<string>("");
    const [aireplyupdate, setaireplyupdate] = useState<string>("");
    const [aireplydelete, setaireplydelete] = useState<string>("");


    //Navigation
    const navigate = useNavigate();

    //Functions
    useEffect(() => {
        servicefetch(id ?? "");
        fetchurl2(id ?? "");
    }, [refresh])


    const addgoogledocsurl = async () => {
        try {
            const data = await addurl2(id ?? "", urlcreate);
            if (data.success) {
                toast.success(data.message);
            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                const axiosError = err as any;
                const error = axiosError.response?.data?.message || err.message;
                toast.error(error);
            }
        }
        finally {
            setrefresh(prev => !prev);
            setopenurl(prev => !prev);
        }
    }


    //Create
    const docsagentcreate = async () => {
        try {
            if (!selecturl) {
                return toast.error("Please Select The Url")
            }
            if (!prompt) {
                return toast.error("Please Enter The Instructions To Do")
            }
            const data = await Aiagentdocscreate(id ?? "", selecturl, prompt);
            if (data.success) {
                setaireply(data.message);
                setprompt("")

            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                const axiosError = err as any;
                const error = axiosError.response?.data?.message || err.message;
                toast.error(error);
            }
        }
    }

    //Update
    const docsagentupdate = async () => {
        try {
            if (!selecturl) {
                return toast.error("Please Select The Url")
            }
            if (!prompt) {
                return toast.error("Please Enter The Instructions To Do")
            }
            const data = await Aiagentdocsupdate(id ?? "", selecturl, prompt);
            if (data.success) {
                setaireplyupdate(data.message);
                setprompt("")

            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                const axiosError = err as any;
                const error = axiosError.response?.data?.message || err.message;
                toast.error(error);
            }
        }
    }

    //Delete
    const docsagentdelete = async () => {
        try {
            if (!selecturl) {
                return toast.error("Please Select The Url")
            }
            if (!prompt) {
                return toast.error("Please Enter The Instructions To Do")
            }
            const data = await Aiagentdocsdelete(id ?? "", selecturl, prompt);
            if (data.success) {
                setaireplydelete(data.message);
                setprompt("")

            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                const axiosError = err as any;
                const error = axiosError.response?.data?.message || err.message;
                toast.error(error);
            }
        }
    }


    return (
        <>
            <Toaster position="top-right" />
            {/*Add Url */}
            <Dialog open={openurl} onOpenChange={setopenurl}>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center gap-2">Add Google Docs URL <Link2 /></DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                            <Link size={14} /> URL
                        </Label>
                        <Input
                            placeholder="Add Google Docs URL"
                            value={urlcreate}
                            onChange={(e) => seturlcreate(e.target.value)}
                        />
                    </div>
                    <DialogFooter className="mt-4">
                        <Button disabled={loadingurl2} onClick={addgoogledocsurl}>
                            {loadingurl2 ? "Adding..." : "Add"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Dialog For Create Agent */}
            <Dialog open={opencreate} onOpenChange={setopencreate}>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Create Content</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Link size={14} /> URL
                            </Label>
                            <Input
                                placeholder="Google Docs URL"
                                value={selecturl}
                                disabled
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="key" className="flex items-center gap-2">
                                <MessageCircle size={14} />Prompt To Edit
                            </Label>
                            <Textarea value={prompt} onChange={(e) => setprompt(e.target.value)}
                                placeholder="Enter Prompt"
                                className="pr-10 resize-none h-24"
                            />
                        </div>
                    </div>
                    <AnimatePresence mode="wait">
                        {loadingagentdocs ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className=" rounded-xl text-sm mt-4 leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} className="animate-bounce" /> Working On It ...
                                </div>
                                <section className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                </section>

                            </motion.div>
                        ) : (
                            aireply &&
                            <motion.div
                                key="response"
                                className="relative rounded-xl mt-4 text-sm leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} /> AI Agent Analysis
                                </div>
                                <section style={{ scrollbarWidth: "none" }} className="border rounded-lg p-3 h-25 overflow-auto space-y-2 text-muted-foreground">
                                    {aireply}
                                </section>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <DialogFooter className="mt-4">
                        <Button onClick={docsagentcreate} disabled={loadingagentdocs}>
                            {loadingagentdocs ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Dialog For Update Agent */}
            <Dialog open={openupdate} onOpenChange={setopenupdate}>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Update Content</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Link size={14} /> URL
                            </Label>
                            <Input
                                placeholder="Google Docs URL"
                                value={selecturl}
                                disabled
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="key" className="flex items-center gap-2">
                                <MessageCircle size={14} />Prompt To Edit
                            </Label>
                            <Textarea
                                value={prompt}
                                onChange={(e) => setprompt(e.target.value)}
                                placeholder="Enter Prompt"
                                className="pr-10 resize-none h-24"
                            />
                        </div>

                    </div>
                    <AnimatePresence mode="wait">
                        {loadingagentdocs ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className=" rounded-xl text-sm mt-4 leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} className="animate-bounce" /> Working On It ...
                                </div>
                                <section className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                </section>

                            </motion.div>
                        ) : (
                            aireplyupdate &&
                            <motion.div
                                key="response"
                                className="relative rounded-xl mt-4 text-sm leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} /> AI Agent Analysis
                                </div>
                                <section style={{ scrollbarWidth: "none" }} className="border rounded-lg p-3 h-25 overflow-auto space-y-2 text-muted-foreground">
                                    {aireplyupdate}
                                </section>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <DialogFooter className="mt-4">
                        <Button onClick={docsagentupdate}>
                            {loadingagentdocs ? "Updating..." : "Update"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Dialog For Delete Agent */}
            <Dialog open={opendelete} onOpenChange={setopendelete}>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Delete Content</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Link size={14} /> URL
                            </Label>
                            <Input
                                placeholder="Google Docs URL"
                                value={url2 ?? ""}
                                disabled
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="key" className="flex items-center gap-2">
                                <MessageCircle size={14} />Prompt To Edit
                            </Label>
                            <Textarea
                                value={prompt}
                                onChange={(e) => setprompt(e.target.value)}
                                placeholder="Enter Prompt"
                                className="pr-10 resize-none h-24"
                            />
                        </div>

                    </div>
                    <AnimatePresence mode="wait">
                        {loadingagentdocs ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className=" rounded-xl text-sm mt-4 leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} className="animate-bounce" /> Working On It ...
                                </div>
                                <section className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                </section>

                            </motion.div>
                        ) : (
                            aireplydelete &&
                            <motion.div
                                key="response"
                                className="relative rounded-xl mt-4 text-sm leading-relaxed"
                            >
                                <div className="flex text-[15px] items-center gap-2 mb-2  font-semibold">
                                    <Bot size={14} /> AI Agent Analysis
                                </div>
                                <section style={{ scrollbarWidth: "none" }} className="border rounded-lg p-3 h-25 overflow-auto space-y-2 text-muted-foreground">
                                    {aireplydelete}
                                </section>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <DialogFooter className="mt-4">
                        <Button onClick={docsagentdelete}>
                            {loadingagentdocs ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-medium">GoogleDocs</h1>
                    <p className="text-muted-foreground">Welcome To Ai-Powered GoogleDocs Automation Agent.</p>

                </div>
            </div>
            <div className="flex justify-between items-center gap-2 mt-4">
                <div className="flex gap-2">
                    <File className="text-green-600" />
                    <h2 className="text-xl font-bold">Google Docs Tools</h2>
                </div>
                {loadingurl2 ? (
                    <Skeleton className="h-8 w-25" />
                ) :
                    (url2 && url2.length > 0 ? (
                        <>
                            <Select value={selecturl} onValueChange={(value) => setselectedurl(value)}>
                                <SelectTrigger className="border px-2 py-1 h-auto rounded-md flex items-center gap-1 focus:ring-0">
                                    <div className="flex items-center gap-1">
                                        <SelectValue placeholder="Choose URL">
                                        </SelectValue>
                                    </div>
                                </SelectTrigger>

                                <SelectContent>
                                    {url2.map((element, index) => (
                                        <SelectItem key={index} value={element}>
                                            URL-{index + 1}
                                        </SelectItem>
                                    ))}
                                    <Button variant="ghost"
                                        className="w-full p-1 mt-2"
                                        onClick={() => setopenurl(true)}
                                    >
                                        Add Url <Link2 />
                                    </Button>
                                </SelectContent>
                            </Select>

                        </>
                    ) : (
                        <>
                            {servicedata &&
                                <Button onClick={() => setopenurl(prev => !prev)}>
                                    Add Url <Link2 />
                                </Button>}
                        </>
                    ))}
            </div>
            {loadingfetch ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="h-30 flex flex-col justify-between">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <Skeleton className="h-4 w-15" />
                                <Skeleton className="h-4 w-4 rounded-full" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-3 w-full mb-2" />
                                <Skeleton className="h-3 w-[80%]" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                servicedata ? (
                    <>
                        <div className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Card onClick={() => setopencreate(prev => !prev)} className="hover:border-green-500 transition-colors cursor-pointer">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="font-medium">Create</CardTitle>
                                        <Plus className="h-4 w-4 text-green-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Add or create a new data or contents.</p>
                                    </CardContent>
                                </Card>
                                <Card onClick={() => setopenupdate(prev => !prev)} className="hover:border-amber-500 transition-colors cursor-pointer">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="font-medium">Update</CardTitle>
                                        <Edit3 className="h-4 w-4 text-amber-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Modify existing data or contents.</p>
                                    </CardContent>
                                </Card>

                                <Card onClick={() => setopendelete(prev => !prev)} className="hover:border-red-500 transition-colors cursor-pointer">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="font-medium">Delete</CardTitle>
                                        <Trash2 className="h-4 w-4 text-red-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Remove or delete the data or content permanently.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="mt-4 flex flex-col gap-2 items-center justify-around h-64 border-card border rounded-xl p-6 text-center">
                        <User size={35} />
                        <h2 className="text-xl font-semibold mb-2">
                            No Service Account Yet
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            You haven’t added any service account. Please create one to get started.
                        </p>
                        <Button onClick={() => navigate("/agent/settings")}>Go To Service Account Setting</Button>
                    </div>
                )
            )
            }
        </>
    )
}