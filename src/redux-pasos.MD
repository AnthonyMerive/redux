## pasos: ##

0. npm install react-redux

 1. types:
    crear carpeta types, con el type definido

 2. crear reducer:
    carpeta reducer y dentro cada reducer a crear con nombre del componente
    crear rafce con una funcion que dentro 
    tenga un switch asociado a los types en cada caso definiendo
    lo que debe retornar con return, el default siempre tendra
    un return del state, el state se debe definir con un initialState el switch debe ser evaluado con un (action.type)

 3. crear y configurar el store:
    crear carpeta store y dentro se crea el store, que tendra todo
    dentro importamos createStore y combineReducers ambos seran usados, el combineReducers se usara para combianar todos los reducers que hayamos realizados, createStore creara el store que tendra todos los reducers combinados, por tanto el createStore necesitara dos parametros, el primero sera el resultado del combineReducers y el segundo sera lo siguiente:
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 4. acciones:

    declaramos las acciones que haremos dentro de cada componente, cada accion es una funcion que modifica un arreglo en concreto con su payload, enviamos el parametro a modificar dentro del parametro de la funcion

 5. vincular react con redux provider en el index 

    importamos el Provider desde react-redux y la store creada en el indes.js para que todo nuestro arbol de componentes tenga acceso a la store