import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Landing() {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -8, duration: 1500, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1500, useNativeDriver: true }),
      ])
    ).start();
  }, [floatAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF6F0" />
      <ScrollView contentContainerStyle={styles.scroll} bounces={true}>
        <View style={styles.header}>
          <Animated.View style={[styles.mascotWrap, { transform: [{ translateY: floatAnim }] }]}>
            <View style={styles.mascotBubble}>
              <MaterialCommunityIcons name="emoticon-kiss" size={64} color="#fff" />
            </View>
          </Animated.View>

          <View style={styles.titleWrap}>
            <Text style={styles.title}>StamFree AI</Text>
            <Text style={styles.subtitle}>Playful speech practice for kids — AI-powered, gentle, fun.</Text>
          </View>
        </View>

        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={[styles.ctaButton, styles.startButton, styles.fullWidthCta]}
            onPress={() => router.replace('/(auth)/login')}
            accessibilityLabel="Get Started"
          >
            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>What is StamFree AI?</Text>
          <Text style={styles.cardText}>
            StamFree AI is a kid-friendly app that blends playful games with clinically-informed
            speech therapy techniques. The app uses smart feedback to guide children through
            breathing games, word practice, and fluency-building adventures.
          </Text>
        </View>

        <View style={styles.features}>
          <View style={[styles.featureCard, styles.featurePlay]}>
            <MaterialCommunityIcons name="gamepad-variant" size={28} color="#fff" />
            <Text style={styles.featureTitle}>Therapy as Play</Text>
            <Text style={styles.featureText}>Interactive exercises disguised as games to keep kids engaged.</Text>
          </View>

          <View style={[styles.featureCard, styles.featureReport]}>
            <MaterialCommunityIcons name="notebook-check" size={28} color="#fff" />
            <Text style={styles.featureTitle}>Daily Reports</Text>
            <Text style={styles.featureText}>Simple progress summaries parents can review every day.</Text>
          </View>

         
        </View>

        <View style={styles.parentTips}>
          <Text style={styles.tipsTitle}>Tips for Parents</Text>
          <Text style={styles.tipsText}>Short, regular sessions work best. Celebrate small wins and keep practice playful.</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with care • Clinically informed exercises • Safe for kids</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF6F0' },
  scroll: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  mascotWrap: { width: 110, alignItems: 'center', justifyContent: 'center' },
  mascotBubble: {
    width: 90,
    height: 90,
    borderRadius: 48,
    backgroundColor: '#FF7A66',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  titleWrap: { flex: 1, paddingLeft: 12 },
  title: { fontSize: 28, color: '#3B3B3B', fontWeight: '800' },
  subtitle: { fontSize: 14, color: '#6B6B6B', marginTop: 6 },
  ctaRow: { flexDirection: 'row', marginTop: 8, marginBottom: 18, gap: 12, justifyContent: 'center' },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    minWidth: 140,
    alignItems: 'center',
    elevation: 3,
  },
  fullWidthCta: { minWidth: 240 },
  startButton: { backgroundColor: '#FF7A66' },
  parentButton: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#FFE7E2' },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  ctaTextSecondary: { color: '#FF7A66', fontWeight: '700', fontSize: 16 },
  infoCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 14,
    elevation: 4,
    marginBottom: 14,
  },
  cardTitle: { fontSize: 18, fontWeight: '800', marginBottom: 8, color: '#333' },
  cardText: { fontSize: 14, color: '#555', lineHeight: 20 },
  features: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginBottom: 14 },
  featureCard: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  featurePlay: { backgroundColor: '#FF9C88' },
  featureReport: { backgroundColor: '#7AD7C0' },
  featureAI: { backgroundColor: '#7CC7F2' },
  featureTitle: { color: '#fff', fontWeight: '800', marginTop: 8 },
  featureText: { color: '#fff', fontSize: 12, marginTop: 6, textAlign: 'center' },
  parentTips: {
    backgroundColor: '#FFF9E6',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },
  tipsTitle: { fontSize: 16, fontWeight: '800', color: '#333', marginBottom: 8 },
  tipsText: { fontSize: 14, color: '#555' },
  footer: { alignItems: 'center', marginTop: 6 },
  footerText: { fontSize: 12, color: '#9A9A9A' },
});