import LogIn from "@/components/LogIn";
import SessionProvider from "@/components/SessionProvider";
import SideBar from "@/components/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <LogIn />
          ) : (
            <div className="flex">
              <div className=" bg-[#202123] max-w-xs h-screen overflow-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* client provider - notification */}

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
