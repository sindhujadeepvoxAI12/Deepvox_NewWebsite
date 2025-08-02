import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import EnterpriseAIStack from './pages/solutions/EnterpriseAIStack';
import Healthcare from './pages/solutions/Healthcare';
import FinancialServices from './pages/solutions/FinancialServices';
import VoiceAI from './pages/solutions/VoiceAI';
import EchoLeadsAgents from './pages/solutions/EchoLeadsAgents';
import DigitalTwin from './pages/solutions/DigitalTwin';
import AIforHR from './pages/solutions/AIforHR';
import AIforSalesAnalytics from './pages/solutions/AIforSalesAnalytics';
import AIforDatabaseAnalytics from './pages/solutions/AIforDatabaseAnalytics';
import Technology from './pages/Technology';
import Security from './pages/technology/Security';
import Integrations from './pages/technology/Integrations';
import AIModels from './pages/technology/AIModels';
import Resources from './pages/Resources';
import CaseStudies from './pages/resources/CaseStudies';
import Blog from './pages/resources/Blog';
import FuturePrivacyPreservingAI from './pages/resources/blog/FuturePrivacyPreservingAI';
import MeasuringAIROI from './pages/resources/blog/MeasuringAIROI';
import HIPAAComplianceAIGuide from './pages/resources/blog/HIPAAComplianceAIGuide';
import ZeroTrustAIArchitecture from './pages/resources/blog/ZeroTrustAIArchitecture';
import FinancialAIRegulatoryLandscape from './pages/resources/blog/FinancialAIRegulatoryLandscape';
import FederatedLearningEnterpriseGuide from './pages/resources/blog/FederatedLearningEnterpriseGuide';
import Company from './pages/Company';
import About from './pages/company/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/enterprise-ai-stack" element={<EnterpriseAIStack />} />
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/financial-services" element={<FinancialServices />} />
            <Route path="/solutions/voice-ai" element={<VoiceAI />} />
            <Route path="/solutions/echoleads-agents" element={<EchoLeadsAgents />} />
            <Route path="/solutions/digital-twin" element={<DigitalTwin />} />
            <Route path="/solutions/ai-for-hr" element={<AIforHR />} />
            <Route path="/solutions/ai-for-sales-analytics" element={<AIforSalesAnalytics />} />
            <Route path="/solutions/ai-for-database-analytics" element={<AIforDatabaseAnalytics />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/security" element={<Security />} />
            <Route path="/technology/integrations" element={<Integrations />} />
            <Route path="/technology/ai-models" element={<AIModels />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/future-privacy-preserving-ai" element={<FuturePrivacyPreservingAI />} />
            <Route path="/blog/measuring-ai-roi" element={<MeasuringAIROI />} />
            <Route path="/blog/hipaa-compliance-ai-guide" element={<HIPAAComplianceAIGuide />} />
            <Route path="/blog/zero-trust-ai-architecture" element={<ZeroTrustAIArchitecture />} />
            <Route path="/blog/financial-ai-regulatory-landscape" element={<FinancialAIRegulatoryLandscape />} />
            <Route path="/blog/federated-learning-enterprise-guide" element={<FederatedLearningEnterpriseGuide />} />
            <Route path="/company" element={<Company />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;