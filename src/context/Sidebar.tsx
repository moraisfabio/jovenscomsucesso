import React, { createContext, useContext, useState } from 'react';

interface Sidebar {
  showSidebar: boolean;
  setShowSidebar(show: boolean): void;
}
const SidebarContext = createContext<Sidebar>({} as Sidebar);

const SidebarProvider: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

function UseSidebar(): Sidebar {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { SidebarProvider, UseSidebar };
