# ☁️ Azure High Availability with Virtual Machines ☁️

## 📝 Descripción
Este proyecto despliega una arquitectura de alta disponibilidad utilizando Azure Virtual Machines (VMs) distribuidas en varias zonas de disponibilidad (Availability Zones) y un Azure Load Balancer que distribuye el tráfico entrante.

### 🔧 Componentes:
- **Azure Virtual Machines**: Tres máquinas virtuales distribuidas en diferentes zonas de disponibilidad.
- **Azure Load Balancer**: Balancea el tráfico entre las máquinas virtuales.
- **Azure Virtual Network (VNet)**: Red virtual para conectar las VMs.
- **Availability Zones**: Garantizan alta disponibilidad y tolerancia a fallos.

### 📂 Estructura de la Arquitectura:
1. Las VMs se distribuyen entre las zonas de disponibilidad.
2. El Load Balancer enruta el tráfico a las VMs.
3. La VNet asegura la conectividad entre los recursos.

## 🚀 Despliegue
1. Clona este repositorio: `git clone <repo_url>`
2. Navega al directorio del proyecto.
3. Ejecuta `terraform init` para inicializar el entorno de Terraform.
4. Ejecuta `terraform apply` para desplegar la infraestructura.

## 🛠️ Requisitos
- Cuenta de Azure.
- Azure CLI configurado.
- Terraform instalado.

