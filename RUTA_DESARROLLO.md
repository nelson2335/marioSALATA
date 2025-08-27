# MarioSALATA - PRD y Ruta de Desarrollo

## Product Requirements Document (PRD)

### 1. Visión del Producto
MarioSALATA es un juego experimental que explora nuevas formas de interacción mediante el uso de sensores físicos. El jugador controla a Mario soplando en un micrófono integrado en una placa Arduino Esplora, creando una experiencia de juego única y accesible.

![BOCET](boceto.png)

### 2. Objetivos del Producto
- Crear una experiencia de juego innovadora usando interfaces no convencionales
- Demostrar la integración efectiva entre hardware (Arduino) y software web
- Proporcionar una mecánica de juego simple pero atractiva

### 3. Especificaciones Técnicas
#### Hardware Requerido
- Arduino Esplora con micrófono integrado
- Cable USB para conexión
- Computadora con puerto COM disponible

#### Stack Tecnológico
- **Backend**: Node.js + p5.serialport
- **Frontend**: p5.js
- **Hardware**: Arduino IDE
- **Comunicación**: WebSockets

### 4. Funcionalidades Core (MVP)
1. **Detección de Soplido**
   - Umbral configurable de intensidad
   - Lectura en tiempo real
   - Calibración básica

2. **Mecánica de Juego**
   - Salto de Mario en respuesta al soplido
   - Física básica de movimiento
   - Visualización 2D simple

3. **Conectividad**
   - Comunicación Arduino → Node.js
   - Transmisión en tiempo real al navegador
   - Manejo de conexión/desconexión

### 5. Métricas de Éxito
- Latencia menor a 100ms entre soplido y acción
- Tasa de detección exitosa > 90%
- Estabilidad de conexión durante sesiones de 30+ minutos

## Ruta de Desarrollo - Prototipo Funcional Inicial

### Fase 1: Configuración del Entorno Base (2-3 días)
1. **Configuración del Hardware**
   - [x] Obtener Arduino Esplora
   - [ ] Verificar funcionamiento del micrófono integrado
   - [ ] Realizar pruebas básicas de lectura del sensor

2. **Configuración del Entorno de Desarrollo**
   - [ ] Instalar Arduino IDE
   - [ ] Instalar Node.js
   - [ ] Configurar p5.js y p5.serialport
   - [ ] Verificar compatibilidad de versiones

### Fase 2: Desarrollo del Backend (3-4 días)
1. **Servidor Node.js**
   - [ ] Implementar servidor básico con Express
   - [ ] Configurar p5.serialport para comunicación serie
   - [ ] Implementar WebSocket para comunicación en tiempo real
   - [ ] Crear endpoints básicos de prueba

2. **Arduino**
   - [ ] Desarrollar sketch para lectura del micrófono
   - [ ] Implementar calibración básica del sensor
   - [ ] Configurar envío de datos por puerto serie
   - [ ] Optimizar tasa de muestreo

### Fase 3: Desarrollo del Frontend (4-5 días)
1. **Entorno Gráfico Básico**
   - [ ] Crear canvas con p5.js
   - [ ] Implementar sprite básico de Mario
   - [ ] Diseñar fondo simple y plataforma base
   - [ ] Implementar física básica de salto

2. **Integración**
   - [ ] Conectar WebSocket con frontend
   - [ ] Implementar lógica de detección de soplido
   - [ ] Calibrar umbral de activación del salto
   - [ ] Agregar retroalimentación visual

### Fase 4: Pruebas y Refinamiento (2-3 días)
1. **Pruebas**
   - [ ] Verificar latencia end-to-end
   - [ ] Probar diferentes intensidades de soplido
   - [ ] Verificar estabilidad de la conexión
   - [ ] Realizar pruebas con diferentes usuarios

2. **Optimizaciones**
   - [ ] Ajustar sensibilidad del sensor
   - [ ] Optimizar animaciones
   - [ ] Mejorar respuesta del juego
   - [ ] Reducir latencia si es necesario

### Entregables del Prototipo
1. **Hardware**
   - Arduino Esplora configurado y calibrado
   - Documentación de configuración del hardware

2. **Software**
   - Servidor Node.js funcional
   - Frontend básico con p5.js
   - Código Arduino (sketch)
   - Documentación de instalación y ejecución

3. **Demo**
   - Prototipo jugable básico
   - Video demostrativo
   - Guía de usuario simple

### Notas Técnicas
- El prototipo inicial se enfocará solo en la mecánica de salto
- Se utilizará un diseño minimalista para el frontend
- La calibración será manual en esta fase
- Se priorizará la estabilidad sobre características adicionales

### Tiempo Estimado Total: 11-15 días

Esta ruta de desarrollo está diseñada para conseguir un prototipo funcional lo más rápido posible, centrándose en la mecánica principal de juego (salto por soplido) y la integración básica de todos los componentes.
