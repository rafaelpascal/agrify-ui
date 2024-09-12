import { TopNav, TopNavProps } from "../top-nav";
import { motion } from "framer-motion";

interface DashboardAreaProps extends TopNavProps {
  children: React.ReactNode;
}

export const DashboardArea = (props: DashboardAreaProps) => {
  const { children, title } = props;

  return (
    <main className="fixed flex w-full h-[100vh] flex-col gap-y-4 overflow-y-hidden py-4 sm:relative sm:overflow-y-auto">
      <div className="px-5">
        <TopNav title={`Welcome Back ${title}🪴`} />
      </div>
      <div className="max-h-[calc(100vh-120px)] h-[90vh] overflow-y-auto overflow-x-hidden px-2 pb-[2rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:pb-10"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
};
