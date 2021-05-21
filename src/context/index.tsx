import { SidebarProvider } from './Sidebar';
import { LanguageProvider } from './Lang';

const AppProvider: React.FC = ({ children }) => (
  <>
    <LanguageProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </LanguageProvider>
  </>
);

export default AppProvider;
