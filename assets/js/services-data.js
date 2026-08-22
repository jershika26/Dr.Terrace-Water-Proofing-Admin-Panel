/**
 * Drterrace Admin Panel - Services Data Store
 * Supports Multi-Tier and Single-Spec Services with LocalStorage persistence.
 */

const DR_TERRACE_SERVICES_KEY = 'drterrace_master_services_v1';

const DEFAULT_SERVICES = [
    {
        id: 'service-1',
        name: 'Outer Wall Proofing',
        specType: 'multi', // 'multi' | 'single'
        specs: [
            {
                id: 'spec-1-1',
                tierName: 'Tier 1 - Economy',
                description: 'Surface cleaning with wire brush, high-pressure water jetting, crack filling with elastomeric sealant, followed by 2 coats of polymer-modified cementitious waterproof coating.',
                price: 45.00
            },
            {
                id: 'spec-1-2',
                tierName: 'Tier 2 - Standard',
                description: 'Surface preparation, crack routing & micro-grouting, 1 coat penetrating acrylic primer, glass fiber mesh reinforcement at joints, followed by 2 coats of heavy-duty elastomeric acrylic waterproof membrane (3 Years Warranty).',
                price: 75.00
            },
            {
                id: 'spec-1-3',
                tierName: 'Tier 3 - Premium',
                description: 'Comprehensive surface grinding, high-grade PU crack sealant, epoxy-penetrating primer, continuous 145 GSM glass fiber mesh, 3 coats of polyurethane (PU) hybrid waterproof coating with UV-resistant topcoat (7 Years Warranty).',
                price: 110.00
            },
            {
                id: 'spec-1-4',
                tierName: 'Tier 4 - Platinum',
                description: 'Industrial diamond grinding surface prep, fast-cure pure polyurea / elastomeric aliphatic membrane spray application, non-yellowing UV barrier coating, anti-fungal & crack-bridging capability up to 3mm (10 Years Warranty).',
                price: 165.00
            }
        ]
    },
    {
        id: 'service-2',
        name: 'Terrace Waterproofing',
        specType: 'multi',
        specs: [
            {
                id: 'spec-2-1',
                tierName: 'Tier 1 - Basic Coating',
                description: 'Pressure washing, surface cleaning, acrylic elastomeric coating 2 coats with fiber reinforced perimeter banding.',
                price: 50.00
            },
            {
                id: 'spec-2-2',
                tierName: 'Tier 2 - Fiber Reinforced Membrane',
                description: 'Complete screed crack repair, 1 coat bonding agent, complete 50 GSM fiberglass mesh embedding, and 3 coats UV elastomeric membrane (5 Years Warranty).',
                price: 85.00
            },
            {
                id: 'spec-2-3',
                tierName: 'Tier 3 - Polyurethane UV Shield',
                description: 'Heavy duty moisture-cure polyurethane waterproofing membrane system with solar reflective high-SRI thermal topcoat (10 Years Warranty).',
                price: 135.00
            }
        ]
    },
    {
        id: 'service-3',
        name: 'Bathroom Waterproofing',
        specType: 'single',
        specs: [
            {
                id: 'spec-3-1',
                tierName: 'Standard Specification',
                description: 'Comprehensive sunken slab and wall tile joint pressure grouting, elastomeric waterproofing membrane coating with polymer-modified cementitious under-tile barrier barrier up to splash height (5 Years Warranty).',
                price: 65.00
            }
        ]
    },
    {
        id: 'service-4',
        name: 'Sump Waterproofing',
        specType: 'single',
        specs: [
            {
                id: 'spec-4-1',
                tierName: 'Standard Specification',
                description: 'Deep cleaning, food-grade non-toxic crystalline waterproofing coating with crack injection micro-cement grouting for potable underground water storage tanks (7 Years Warranty).',
                price: 55.00
            }
        ]
    },
    {
        id: 'service-5',
        name: 'Basement Waterproofing',
        specType: 'single',
        specs: [
            {
                id: 'spec-5-1',
                tierName: 'Standard Specification',
                description: 'Negative side crystalline water barrier application with high-pressure polyurethane chemical injection for retaining walls and floor raft joints (10 Years Warranty).',
                price: 95.00
            }
        ]
    }
];

window.ServiceStore = {
    getAllServices: function () {
        const stored = localStorage.getItem(DR_TERRACE_SERVICES_KEY);
        if (!stored) {
            this.saveAllServices(DEFAULT_SERVICES);
            return DEFAULT_SERVICES;
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing services from localStorage', e);
            return DEFAULT_SERVICES;
        }
    },

    saveAllServices: function (services) {
        localStorage.setItem(DR_TERRACE_SERVICES_KEY, JSON.stringify(services));
    },

    getServiceById: function (id) {
        const services = this.getAllServices();
        return services.find(s => s.id === id) || null;
    },

    addService: function (name, specType) {
        const services = this.getAllServices();
        const newId = 'service-' + Date.now();
        const newService = {
            id: newId,
            name: name,
            specType: specType || 'multi',
            specs: []
        };

        if (specType === 'single') {
            newService.specs.push({
                id: 'spec-' + Date.now(),
                tierName: 'Standard Specification',
                description: 'Standard specification details for ' + name,
                price: 50.00
            });
        }

        services.push(newService);
        this.saveAllServices(services);
        return newService;
    },

    updateService: function (id, updatedData) {
        const services = this.getAllServices();
        const index = services.findIndex(s => s.id === id);
        if (index !== -1) {
            services[index] = { ...services[index], ...updatedData };
            this.saveAllServices(services);
            return services[index];
        }
        return null;
    },

    deleteService: function (id) {
        let services = this.getAllServices();
        services = services.filter(s => s.id !== id);
        this.saveAllServices(services);
        return services;
    },

    addSpecToService: function (serviceId, specData) {
        const services = this.getAllServices();
        const service = services.find(s => s.id === serviceId);
        if (service) {
            const specId = 'spec-' + Date.now();
            const newSpec = {
                id: specId,
                tierName: specData.tierName || (service.specType === 'single' ? 'Standard Specification' : 'New Tier'),
                description: specData.description || '',
                price: parseFloat(specData.price) || 0.00
            };
            if (service.specType === 'single') {
                service.specs = [newSpec]; // Only 1 spec for single
            } else {
                if (!service.specs) service.specs = [];
                service.specs.push(newSpec);
            }
            this.saveAllServices(services);
            return newSpec;
        }
        return null;
    },

    updateSpec: function (serviceId, specId, specData) {
        const services = this.getAllServices();
        const service = services.find(s => s.id === serviceId);
        if (service && service.specs) {
            const specIndex = service.specs.findIndex(sp => sp.id === specId);
            if (specIndex !== -1) {
                service.specs[specIndex] = {
                    ...service.specs[specIndex],
                    tierName: specData.tierName !== undefined ? specData.tierName : service.specs[specIndex].tierName,
                    description: specData.description !== undefined ? specData.description : service.specs[specIndex].description,
                    price: specData.price !== undefined ? parseFloat(specData.price) : service.specs[specIndex].price
                };
                this.saveAllServices(services);
                return service.specs[specIndex];
            }
        }
        return null;
    },

    deleteSpec: function (serviceId, specId) {
        const services = this.getAllServices();
        const service = services.find(s => s.id === serviceId);
        if (service && service.specs) {
            service.specs = service.specs.filter(sp => sp.id !== specId);
            this.saveAllServices(services);
            return true;
        }
        return false;
    }
};

/**
 * Drterrace Admin Panel - Packages Data Store
 * Manages package master list with LocalStorage persistence.
 */
const DR_TERRACE_PACKAGES_KEY = 'drterrace_master_packages_v1';

const DEFAULT_PACKAGES = [
    {
        id: 'pkg-1',
        name: 'Acrylic Elastomeric Coating (Economic)',
        warranty: '3 Years'
    },
    {
        id: 'pkg-2',
        name: 'Pure Flexible Polyurethane(Premium)',
        warranty: '5 Years'
    },
    {
        id: 'pkg-3',
        name: 'Polyurethane based Polyurea(Elite)',
        warranty: '10 Years'
    }
];

window.PackageStore = {
    getAllPackages: function () {
        const stored = localStorage.getItem(DR_TERRACE_PACKAGES_KEY);
        if (!stored) {
            const initial = JSON.parse(JSON.stringify(DEFAULT_PACKAGES));
            this.saveAllPackages(initial);
            return initial;
        }
        try {
            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed) || parsed.length === 0) {
                const initial = JSON.parse(JSON.stringify(DEFAULT_PACKAGES));
                this.saveAllPackages(initial);
                return initial;
            }
            // Deduplicate by ID and Name to ensure clean state
            const seen = new Set();
            const uniquePackages = [];
            parsed.forEach(pkg => {
                const key = (pkg.name || '').trim().toLowerCase();
                if (key && !seen.has(key)) {
                    seen.add(key);
                    uniquePackages.push(pkg);
                }
            });
            if (uniquePackages.length !== parsed.length) {
                this.saveAllPackages(uniquePackages);
            }
            return uniquePackages;
        } catch (e) {
            console.error('Error parsing packages from localStorage', e);
            const initial = JSON.parse(JSON.stringify(DEFAULT_PACKAGES));
            return initial;
        }
    },

    saveAllPackages: function (packages) {
        localStorage.setItem(DR_TERRACE_PACKAGES_KEY, JSON.stringify(packages));
    },

    getPackageById: function (id) {
        const packages = this.getAllPackages();
        return packages.find(p => p.id === id) || null;
    },

    addPackage: function (name, warranty) {
        const packages = this.getAllPackages();
        const warrantyStr = String(warranty).trim();
        const formattedWarranty = warrantyStr.toLowerCase().includes('year') ? warrantyStr : warrantyStr + ' Years';
        const newPkg = {
            id: 'pkg-' + Date.now(),
            name: name.trim(),
            warranty: formattedWarranty
        };
        packages.push(newPkg);
        this.saveAllPackages(packages);
        return newPkg;
    },

    updatePackage: function (id, name, warranty) {
        const packages = this.getAllPackages();
        const index = packages.findIndex(p => p.id === id);
        if (index !== -1) {
            const warrantyStr = String(warranty).trim();
            const formattedWarranty = warrantyStr.toLowerCase().includes('year') ? warrantyStr : warrantyStr + ' Years';
            packages[index] = {
                ...packages[index],
                name: name.trim(),
                warranty: formattedWarranty
            };
            this.saveAllPackages(packages);
            return packages[index];
        }
        return null;
    },

    deletePackage: function (id) {
        let packages = this.getAllPackages();
        packages = packages.filter(p => p.id !== id);
        this.saveAllPackages(packages);
        return packages;
    }
};

