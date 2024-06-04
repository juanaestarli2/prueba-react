// Fix:any Binding element 'children' implicitly has an 'any' type.
//Configuracion general del main
const MainContent = ({ children }:any) => {
    return (
      <div style={{ backgroundColor: '#ffffff' }}>
        <div style={{ minHeight: '100vh' }}>
            {children}
        </div>
      </div>
    );
  };
  
export default MainContent;
